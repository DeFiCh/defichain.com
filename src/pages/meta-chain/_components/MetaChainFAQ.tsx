import { useTranslation } from "next-i18next";
import { Container } from "@components/commons/Container";
import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";
import classNames from "classnames";

interface DropdownItemInterface {
  title: string;
  desc: [
    {
      value: string;
      type: "string" | "link";
      link?: string;
    }
  ];
}

export function MetaChainFAQ(): JSX.Element {
  const { t } = useTranslation("page-meta-chain");
  const items: DropdownItemInterface[] = t("faq.items", {
    returnObjects: true,
  });
  return (
    <Container className="relative mb-24 md:mb-[184px] lg:mb-[288px]">
      <div
        className="flex text-center justify-center text-[32px] leading-[36px] lg:text-6xl lg:leading-[72px]"
        data-testid="faq-title"
      >
        {t("faq.title")}
      </div>
      <div className="mt-12 lg:mt-16 flex flex-col gap-y-4">
        {items.map((item) => (
          <DropdownItem key={item.title} props={item} />
        ))}
      </div>
    </Container>
  );
}

function DropdownItem({
  props,
}: {
  props: DropdownItemInterface;
}): JSX.Element {
  const [dropdownState, setDropDownState] = useState<boolean>(false);
  return (
    <div
      className="border border-dark-200 cursor-pointer lg:mx-32 py-5 px-6 rounded-[10px]"
      onClick={async () => {
        setDropDownState(!dropdownState);
      }}
    >
      <div className="flex justify-between items-center">
        <span
          className="text-sm lg:font-semibold lg:text-lg lg:leading-6 text-dark-900"
          data-testid={`faq-title-${props.title}`}
        >
          {props.title}
        </span>
        <IoChevronDown
          size={20}
          className={classNames({
            "rotate-180": dropdownState,
          })}
        />
      </div>
      {dropdownState && (
        <div className="mt-8 leading-5" data-testid={`faq-desc-${props.title}`}>
          {props.desc.map((item, index) => {
            if (item.type === "link") {
              return (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  id="faq-link"
                  data-testid="faq-link"
                >
                  <span className="text-electric underline">{item.value}</span>
                </a>
              );
            }
            return <span key={index}>{item.value}</span>;
          })}
        </div>
      )}
    </div>
  );
}
