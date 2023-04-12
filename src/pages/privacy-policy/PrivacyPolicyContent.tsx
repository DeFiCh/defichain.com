import { Container } from "@components/commons/Container";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import React, { useRef } from "react";
import TableOfContents from "./_components/TableOfContents";

export function PrivacyPolicyContent({ post }) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Container className="flex flex-row mb-[72px] md:mb-[96px] lg:mb-[184px]">
      <div className="hidden h-full top-[100px] sticky lg:block md:w-3/12 lg:pt-[64px] flex-1">
        <div className="min-w-[312px] hidden lg:block">
          <TableOfContents parentReference={contentRef} />
        </div>
      </div>
      <div className="flex flex-col w-full mt-8 lg:mt-0 lg:pt-16 lg:w-9/12">
        <article ref={contentRef}>
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
