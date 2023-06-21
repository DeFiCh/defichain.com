import { UserConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@components/commons/Container";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import React, { useEffect, useRef, useState } from "react";
import { remark } from "remark";
import { SectionTitle } from "@components/commons/SectionTitle";
import rehypeRaw from "rehype-raw";
import { SectionSubTitle } from "@components/commons/SectionSubTitle";
import classNames from "classnames";
import { Head } from "@components/commons/Head";
import { useRouter } from "next/router";
import { getMDPageBySlug } from "../../utils/api";
import { Post } from "./learn/utils/api";
import TableOfContents from "./whitePaper/TableOfContents";

interface WhitePaperPageProps {
  props: {
    _nextI18Next: {
      initialI18nStore: any;
      initialLocale: string;
      userConfig: UserConfig | null;
    };
    post: Post;
  };
}

export default function WhitePaperPage({ post }): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [localeKey, setLocaleKey] = useState(router.locale);

  useEffect(() => {
    if (localeKey !== router.locale) {
      setLocaleKey(router.locale);
    }
  });

  return (
    <>
      <Head title={post.subtitle} />
      <div className="py-16 md:py-10 lg:py-16 border-b border-gray-800 border-opacity-50">
        <Container className="flex flex-row gap-x-12 relative lg:pr-12">
          <div className="block absolute w-[417px] h-[237px] top-[-158px] left-[-267px] md:top-[-42px] md:left-[-281px] lg:h-[297px] bg-contain bg-no-repeat mix-blend-screen bg-[url(/assets/img/common/emptyCubeDesktop.png)]" />
          <div className="hidden lg:block md:w-3/12 flex-1" />
          <div className="flex flex-col w-full lg:w-9/12 md:px-6 lg:px-0">
            <div
              className={classNames(
                "flex flex-col gap-y-5 w-full lg:w-[812px]"
              )}
            >
              <SectionTitle
                text={post.title}
                testID="white-paper-documentation"
              />
              <SectionSubTitle
                text={post.subtitle}
                testID="white-paper-documentation"
              />
            </div>
          </div>
        </Container>
      </div>
      <Container className="flex flex-row gap-x-12 lg:mb-[216px] lg:pr-12">
        <div className="hidden h-[calc(100svh-147px)] sticky top-[100px] no-scrollbar overflow-y-auto lg:block md:w-3/12 lg:pt-[64px] flex-1">
          <TableOfContents key={localeKey} parentReference={contentRef} />
        </div>
        <div className="flex flex-col w-full mt-6 mb-24 md:mt-8 lg:mb-10 lg:mt-0 lg:pt-[64px] lg:w-9/12">
          <div
            ref={contentRef}
            className={classNames(
              "text-dark-1000 font-desc break-words",
              "text-base tracking-[0.03em]",
              "lg:text-xl lg:tracking-normal lg:leading-8"
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

export async function getStaticProps({ locale }): Promise<WhitePaperPageProps> {
  const post = getMDPageBySlug("white-paper", locale);

  const result = await remark().process(post.content);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "layout"])),
      post: {
        ...post,
        content: result.toString(),
      },
    },
  };
}
