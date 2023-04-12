import classnames from "classnames";
import { useTranslation } from "next-i18next";
import {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
  RefObject,
} from "react";

interface HeadingsI {
  id: string;
  title: string;
}
/**
 * This renders an item in the table of contents list.
 * scrollIntoView is used to ensure that when a user clicks on an item, it will smoothly scroll.
 */
function Headings({ headings, activeId, parentReference }) {
  const { t } = useTranslation("page-privacypolicy");

  return (
    <ul className="lg:w-9/12">
      <li className="mb-6">
        <a className="font-sans font-bold text-xl">{t("content.outline")}</a>
      </li>
      {headings.map((heading, index) => (
        <li
          key={heading.id}
          className={classnames("mb-6", { active: heading.id === activeId })}
        >
          <a
            href={`#${heading.id}`}
            className={classnames(
              "font-sans font-semibold text-[18px] leading-6 text-dark-500",
              {
                "!text-brand-100": heading.id === activeId,
              }
            )}
            onClick={() => {
              parentReference.current
                .querySelector(`#${heading.id}`)
                .scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            {`${index + 1}. ${heading.title}`}
          </a>
        </li>
      ))}
    </ul>
  );
}

/**
 * Dynamically generates the table of contents list, using any H2s it can find in the main text
 */
const useHeadingsData = (parentReference) => {
  const [nestedHeadings, setNestedHeadings] = useState<HeadingsI[]>([]);

  useEffect(() => {
    const headingElements = Array.from(
      parentReference.current.querySelectorAll("main h2")
    );

    // Created a list of headings, with H3s nested
    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

const getNestedHeadings = (headingElements) => {
  const nestedHeadings: HeadingsI[] = [];

  headingElements.forEach((heading) => {
    const { title, id } = heading;
    if (title !== "" && heading.nodeName === "H2") {
      nestedHeadings.push({ id, title });
    }
  });
  return nestedHeadings;
};

const useIntersectionObserver = (
  setActiveId: Dispatch<SetStateAction<string | undefined>>,
  parentReference: RefObject<HTMLDivElement>
) => {
  const headingElementsRef = useRef({});
  useEffect(() => {
    if (parentReference.current === null) return () => {};
    const headingElements = Array.from(
      parentReference.current.querySelectorAll("h2[id]")
    );
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        const value = map;
        value[headingElement.target.id] = headingElement;
        return value;
      }, headingElementsRef.current);

      // Get all headings that are currently visible on the page
      const visibleHeadings: IntersectionObserverEntry[] = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) {
          visibleHeadings.push(headingElement);
        }
      });
      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading: Element) => heading?.id === id);

      // If there is only one visible heading, this is our "active" heading
      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0]?.target.id);
        // If there is more than one visible heading,
        // choose the one that is closest to the top of the page
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
        );

        setActiveId(sortedVisibleHeadings[0]?.target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "-15% 0% -65% 0px", // values used to reach activeId of the last section title
    });
    headingElements.forEach((element: Element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};

/**
 * Renders the table of contents.
 */
export default function TableOfContents({
  parentReference,
}: {
  parentReference: RefObject<HTMLDivElement>;
}) {
  const [activeId, setActiveId] = useState<string | undefined>();
  const { nestedHeadings } = useHeadingsData(parentReference);
  useIntersectionObserver(setActiveId, parentReference);

  return (
    <Headings
      headings={nestedHeadings}
      activeId={activeId}
      parentReference={parentReference}
    />
  );
}
