import classnames from "classnames";
import { useTranslation } from "next-i18next";
import { useState, useEffect, useRef } from "react";

interface HeadingsI {
  id: string;
  title: string;
}
interface NestedHeadingsI extends HeadingsI {
  items: HeadingsI[];
}
/**
 * This renders an item in the table of contents list.
 * scrollIntoView is used to ensure that when a user clicks on an item, it will smoothly scroll.
 */
function Headings({ headings, activeId, parentReference }) {
  const { t } = useTranslation("page-explore-masternodes");

  return (
    <ul>
      <li className="mb-6">
        <a className="font-sans font-bold text-xl text-dark-800">
          {t("technicalGuide.outline")}
        </a>
      </li>
      {headings.map((heading) => (
        <li
          key={heading.id}
          className={classnames("mb-6", { active: heading.id === activeId })}
        >
          <a
            href={`#${heading.id}`}
            className={classnames("font-sans font-bold text-xl text-dark-800", {
              "!text-brand-100": heading.id === activeId,
            })}
            onClick={(e) => {
              e.preventDefault();
              parentReference.current
                .querySelector(`#${heading.id}`)
                .scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            {heading.title}
          </a>
          {heading.items.length > 0 && (
            <ul className="mt-4">
              {heading.items.map((child) => (
                <li
                  key={child.id}
                  className={classnames("mb-2 px-4 py-1", {
                    active: child.id === activeId,
                  })}
                >
                  <a
                    href={`#${child.id}`}
                    className={classnames("font-sans text-sm text-dark-800", {
                      "!text-brand-100": child.id === activeId,
                    })}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${child.id}`)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

/**
 * Dynamically generates the table of contents list, using any H2s and H3s it can find in the main text
 */
const useHeadingsData = (parentReference) => {
  const [nestedHeadings, setNestedHeadings] = useState<NestedHeadingsI[]>([]);

  useEffect(() => {
    const headingElements = Array.from(
      parentReference.current.querySelectorAll("main h2, main h3")
    );

    // Created a list of headings, with H3s nested
    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

const getNestedHeadings = (headingElements) => {
  const nestedHeadings: NestedHeadingsI[] = [];

  headingElements.forEach((heading) => {
    const { title, id } = heading;
    if (title !== "" && heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (
      title !== "" &&
      heading.nodeName === "H3" &&
      nestedHeadings.length > 0
    ) {
      nestedHeadings[nestedHeadings.length - 1]?.items?.push({
        id,
        title,
      });
    }
  });
  return nestedHeadings;
};

const useIntersectionObserver = (setActiveId, parentReference) => {
  const headingElementsRef = useRef({});
  useEffect(() => {
    const headingElements = Array.from(
      parentReference.current.querySelectorAll("h2[id], h3[id]")
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
      root: document.querySelector("iframe"),
      rootMargin: "100px",
    });
    headingElements.forEach((element: Element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};

/**
 * Renders the table of contents.
 */
export default function TableOfContents({ parentReference }) {
  const [activeId, setActiveId] = useState();
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
