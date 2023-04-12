import { UserConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@components/commons/Container";
import React, { useRef } from "react";
import { remark } from "remark";
import { SectionTitle } from "@components/commons/SectionTitle";
import { SectionSubTitle } from "@components/commons/SectionSubTitle";
import { SectionDescription } from "@components/commons/SectionDescription";
import classNames from "classnames";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import { Head } from "@components/commons/Head";
import { getMDPageBySlug } from "../../utils/api";
import { Post } from "./learn/utils/api";
import TableOfContents from "./privacy-policy/_components/TableOfContents";

interface PrivacyPolicyPageProps {
  props: {
    _nextI18Next: {
      initialI18nStore: any;
      initialLocale: string;
      userConfig: UserConfig | null;
    };
    post: Post;
  };
}

export default function PrivacyPolicyPage({ post }): JSX.Element {
  const { t } = useTranslation("page-privacypolicy");
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head title={t("Header.subtitle")} />
      <div className="py-8 md:py-8 lg:py-16 border-b border-gray-800 border-opacity-50">
        <Container className="flex flex-row gap-x-12 relative">
          <div className="absolute lg:block hidden w-[417px] h-[324px] top-[-158px] left-[-267px] md:top-[-42px] md:left-[-110px] lg:h-[297px] bg-contain bg-no-repeat mix-blend-screen bg-[url(/assets/img/common/emptyCubeDesktop.png)]" />
          <div className="hidden lg:block md:w-3/12 flex-1" />
          <div className="flex flex-col w-full lg:w-9/12 lg:px-2">
            <div
              className={classNames(
                "flex flex-col gap-y-5 w-full lg:w-[812px]"
              )}
            >
              <SectionTitle text={t("Header.sectionTitle")} />
              <SectionSubTitle text={t("Header.subtitle")} />
              <SectionDescription
                text={t("Header.desc")}
                customStyle="!text-base !tracking-[.03em] lg:!tracking-normal lg:!text-xl lg:!leading-7"
              />
            </div>
          </div>
        </Container>
      </div>
      <Container className="flex flex-row mb-[72px] md:mb-[96px] lg:mb-[184px]">
        <div className="hidden h-full sticky top-[100px] lg:block md:w-3/12 lg:pt-[64px] flex-1">
          <TableOfContents parentReference={contentRef} />
        </div>
        <div className="flex flex-col w-full mt-8 lg:mt-0 lg:pt-16 lg:w-9/12 lg:pl-2">
          <div
            ref={contentRef}
            className={classNames(
              "text-dark-1000 font-desc break-words",
              "text-base tracking-[0.03em]",
              "lg:text-xl lg:tracking-normal lg:leading-8",
              "lg:w-11/12"
            )}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[
                rehypeSlug,
                [
                  rehypeAutolinkHeadings,
                  {
                    behavior: "wrap",
                    properties: {
                      className: ["no-underline hover:underline"],
                    },
                  },
                ],
                [rehypeRaw],
              ]}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps({
  locale,
}): Promise<PrivacyPolicyPageProps> {
  const post = getMDPageBySlug("privacy-policy", locale);

  const result = await remark().process(post.content);

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "layout",
        "page-privacypolicy",
      ])),
      post: {
        ...post,
        content: result.toString(),
      },
    },
  };
}
