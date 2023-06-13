import { useTranslation } from "next-i18next";
import { Container } from "@components/commons/Container";
import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";
import classNames from "classnames";

interface DropdownItemInterface {
  title: string;
  desc: string;
}

export function MetaChainFAQ(): JSX.Element {
  const { t } = useTranslation("page-meta-chain");
  const items: DropdownItemInterface[] = t("faq.items", {
    returnObjects: true,
  });
  return (
    <Container className="relative">
      <div className="flex justify-center lg:text-6xl lg:leading-[72px]">
        {t("faq.title")}
      </div>
      <div className="my-16 flex flex-col gap-y-4">
        {items.map((item) => (
          <DropdownItem key={item.title} {...item} />
        ))}
      </div>
    </Container>
  );
}

function DropdownItem(props): JSX.Element {
  const [dropdownState, setDropDownState] = useState<boolean>(false);
  return (
    <div
      className="border border-dark-200 cursor-pointer lg:mx-32 lg:py-5 lg:px-6 rounded-[10px]"
      onClick={async () => {
        setDropDownState(!dropdownState);
      }}
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg leading-6 text-dark-900">
          {props.title}
        </span>
        <IoChevronDown
          size={20}
          className={classNames({
            "rotate-180": dropdownState,
          })}
        />
      </div>
      {dropdownState && <div className="mt-8 leading-5">{props.desc}</div>}
    </div>
  );
}
