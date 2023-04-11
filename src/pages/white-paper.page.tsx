import { UserConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { PageHeader } from "@components/commons/PageHeader";
import { Container } from "@components/commons/Container";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import React, { useRef } from "react";
import { remark } from "remark";
// import { Head } from "@components/commons/Head";
import { SectionTitle } from "@components/commons/SectionTitle";
import rehypeRaw from "rehype-raw";
import { SectionSubTitle } from "@components/commons/SectionSubTitle";
import { SectionDescription } from "@components/commons/SectionDescription";
import classNames from "classnames";
import { getMDPageBySlug } from "../../utils/api";
import { Post } from "./learn/utils/api";
import TableOfContents from "../components/index/whitePaper/TableOfContents";

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
  return (
    <div className="py-16 md:py-10 lg:py-16 border-b border-gray-800 border-opacity-50">
      <Container className="flex flex-row gap-x-12 relative lg:pr-12">
        <div className="block absolute w-[417px] h-[237px] top-[-158px] left-[-267px] md:top-[-42px] md:left-[-281px] lg:h-[297px] bg-contain bg-no-repeat mix-blend-screen bg-[url('/assets/img/mnTechnicalGuide/emptyCubeDesktop.png')]" />
        <div className="hidden lg:block md:w-3/12 flex-1" />
        <div className="flex flex-col w-full lg:w-9/12 md:px-6 lg:px-0">
          <div
            className={classNames("flex flex-col gap-y-5 w-full lg:w-[812px]")}
          >
            <SectionTitle text={post.title} />
            <SectionSubTitle text={post.subtitle} />
            <SectionDescription
              text={post.description}
              customStyle="!text-base !tracking-[.03em] lg:!tracking-normal lg:!text-xl lg:!leading-7"
            />
          </div>
        </div>
      </Container>

      <Container className="flex flex-row gap-x-12 lg:mb-[216px] lg:pr-12">
        <div className="hidden h-full sticky top-[100px] lg:block md:w-3/12 lg:pt-[64px] flex-1">
          <TableOfContents parentReference={contentRef} />
        </div>
        <div className="flex flex-col w-full mt-12 mb-24 md:mb-16 lg:mb-10 lg:mt-0 lg:w-9/12">
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
                // rehypeSanitize,
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
    </div>
    // <>
    //   <Head title={post.title} description={post.description} />
    //   <div>

    //           <SectionTitle text={post.subtitle} />
    //           <SectionSubTitle text={post.title} />
    //           <SectionDescription
    //             text={post.description}
    //             customStyle="!text-base !tracking-[.03em] lg:!tracking-normal lg:!text-xl lg:!leading-7"
    //           />

    //   </div>

    // <Container>
    //   <article className="text-dark-1000">
    //     <ReactMarkdown
    //       remarkPlugins={[remarkGfm]}
    //       rehypePlugins={[
    //         // rehypeSanitize,
    //         rehypeSlug,
    //         [
    //           rehypeAutolinkHeadings,
    //           {
    //             behavior: "wrap",
    //             properties: {
    //               className: ["no-underline hover:underline"],
    //             },
    //           },
    //         ],
    //         [rehypeRaw]
    //       ]}
    //     >
    //       {post.content}
    //     </ReactMarkdown>
    //   </article>
    // </Container>
    // </>
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
