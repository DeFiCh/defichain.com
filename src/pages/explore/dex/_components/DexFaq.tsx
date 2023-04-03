import { Container } from "@components/commons/Container";
import { Disclosure } from "@headlessui/react";
import { FiChevronUp } from "react-icons/fi";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classNames from "classnames";

export default function DexFaq(): JSX.Element {
  const { t } = useTranslation("page-explore-dex");
  const entries: Array<{ question: string; answer: string[] }> = t(
    "faq.content",
    {
      returnObjects: true,
    }
  );
  const faqContents = [
    {
      question: entries[0].question,
      answer: entries[0].answer,
    },
    {
      question: entries[1].question,
      answer: entries[1].answer,
    },
    {
      question: entries[2].question,
      answer: entries[2].answer,
    },
    {
      question: entries[3].question,
      answer: entries[3].answer,
    },
  ];

  return (
    <Container className="lg:mt-[69px] md:mt-[33px] mt-0 lg:mb-[180px] mb-[72px]">
      <div className="text-[40px] leading-[44px] mb-16 text-center">
        {t("faq.title")}
      </div>
      {faqContents.map((faq) => (
        <Disclosure key={faq.question}>
          {({ open }) => (
            <div
              className={classNames(
                "border rounded-[10px] border-dark-200 mb-4 py-5 px-6 text-left",
                { "pb-8": open }
              )}
            >
              <Disclosure.Button
                className={classNames(
                  "block text-dark-900 flex items-center justify-between w-full text-[14px] leading-5 lg:text-lg lg:leading-6",
                  { "font-semibold": open }
                )}
              >
                <span className="text-left w-10/12">{faq.question}</span>
                <FiChevronUp
                  className={classNames("text-2xl", {
                    "rotate-180 transform": open,
                  })}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-dark-1000 mt-8 leading-5 lg:text-base text-[14px]">
                {faq.answer.map((p, index) => (
                  <div
                    className={classNames({
                      "mb-4": index !== faq.answer.length - 1,
                    })}
                    key={p}
                  >
                    {p}
                  </div>
                ))}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </Container>
  );
}

export async function getStaticProps({
  locale,
}): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "layout",
        "page-explore-dex",
      ])),
    },
  };
}
