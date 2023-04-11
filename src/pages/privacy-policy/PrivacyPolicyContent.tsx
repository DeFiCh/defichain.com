import { useTranslation } from "next-i18next";
import { Container } from "@components/commons/Container";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import classNames from "classnames";
import React from "react";

export function PrivacyPolicyContent({ post }) {
  const { t } = useTranslation("page-privacypolicy");
  const [currentRef, setCurrentRef] = React.useState<string>("");
  // TODO @chloe add href into .json
  const headings = [
    { title: t("content.introduction"), href: "#1-introduction" },
    {
      title: t("content.informationCollected"),
      href: "#2-information-collected",
    },
    {
      title: t("content.whenCollected"),
      href: "#3-when-is-information-collected",
    },
    {
      title: t("content.useInformation"),
      href: "#4-use-of-information-and-details",
    },
    {
      title: t("content.security"),
      href: "#5-security-of-your-personal-information",
    },
    { title: t("content.cookies"), href: "#6-do-you-use-cookies" },
    { title: t("content.thirdParty"), href: "#7-third-party-disclosure" },
    { title: t("content.websiteLinks"), href: "#8-links-to-other-websites" },
    { title: t("content.google"), href: "#9-google" },
    { title: t("content.signals"), href: "#10-do-not-track-signals" },
    {
      title: t("content.thirdPartyBehavioural"),
      href: "#11-third-party-behavioural-tracking",
    },
    {
      title: t("content.accessInfo"),
      href: "#12-access-to-updating-and-non-use-of-your-personal-information",
    },
    {
      title: t("content.changesToStatement"),
      href: "#13-changes-to-this-statement",
    },
    { title: t("content.contactInfo"), href: "#14-contact-information" },
  ];

  return (
    <Container className="flex flex-row lg:mb-[216px]">
      <div className="hidden h-full top-[100px] sticky lg:block md:w-3/12 lg:pt-[64px] flex-1">
        <div className="min-w-[312px] hidden lg:block">
          <div className="text-dark-800 text-[20px] leading-[28px] font-bold pb-[24px]">
            {t("content.outline")}
          </div>

          {/* TODO @chloe increase accuracy of href jump to section */}
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
      <div className="flex flex-col w-full mt-12 mb-24 md:mb-16 lg:mb-10 lg:mt-0 lg:pt-[64px] lg:w-9/12 md:px-6 lg:px-0">
        <article className="prose-xl">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug, [rehypeRaw]]}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </Container>
  );
}
