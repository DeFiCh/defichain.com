import { useTranslation } from "next-i18next";
import { Container } from "@components/commons/Container";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import classNames from "classnames";
import React from "react";

export function PrivacyPolicyContent({ post }) {
  const { t } = useTranslation("page-privacypolicy");
  const headings = [
    { title: t("content.introduction"), href: "#introduction" },
    {
      title: t("content.informationCollected"),
      href: "#information-collected",
    },
    {
      title: t("content.whenCollected"),
      href: "#when-information-collected",
    },
    {
      title: t("content.useInformation"),
      href: "#use-of-information",
    },
    {
      title: t("content.security"),
      href: "#security",
    },
    { title: t("content.cookies"), href: "#cookies" },
    { title: t("content.thirdParty"), href: "#third-party" },
    { title: t("content.websiteLinks"), href: "#links" },
    { title: t("content.google"), href: "#google" },
    { title: t("content.signals"), href: "#do-not-track" },
    {
      title: t("content.thirdPartyBehavioural"),
      href: "#third-party",
    },
    {
      title: t("content.accessInfo"),
      href: "#access-personal-information",
    },
    {
      title: t("content.changesToStatement"),
      href: "#statement",
    },
    { title: t("content.contactInfo"), href: "#contact-information" },
  ];

  const [currentRef, setCurrentRef] = React.useState<string>(headings[0].href);

  return (
    <Container className="flex flex-row mb-[72px] md:mb-[96px] lg:mb-[184px]">
      <div className="hidden h-full top-[100px] sticky lg:block md:w-3/12 lg:pt-[64px] flex-1">
        <div className="min-w-[312px] hidden lg:block">
          <div className="text-dark-800 text-[20px] leading-[28px] font-bold pb-[24px]">
            {t("content.outline")}
          </div>

          {headings.map((heading, index) => (
            <a
              onClick={() => setCurrentRef(heading.href)}
              key={heading.title}
              id={`${heading.href}`}
              href={`${heading.href}`}
              className={classNames(
                "flex flex-row pb-[24px] text-dark-500 font-semibold max-w-[240px]",
                { "!text-brand-100": heading.href === currentRef }
              )}
            >
              <span className="text-[18px] leading-[24px]">
                {index + 1}. {heading.title}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full mt-8 lg:mt-0 lg:pt-16 lg:w-9/12">
        <article className="prose lg:prose-xl">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </Container>
  );
}
