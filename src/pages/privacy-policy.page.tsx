import { UserConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container } from "@components/commons/Container";
import React from "react";
import { remark } from "remark";
import { SectionTitle } from "@components/commons/SectionTitle";
import { SectionSubTitle } from "@components/commons/SectionSubTitle";
import { SectionDescription } from "@components/commons/SectionDescription";
import classNames from "classnames";
import { PrivacyPolicyContent } from "./privacy-policy/PrivacyPolicyContent";
import { getMDPageBySlug } from "../../utils/api";
import { Post } from "./learn/utils/api";

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

  return (
    <>
      <div className="py-16 md:py-10 lg:py-16 border-b border-gray-800 border-opacity-50">
        <Container className="flex flex-row gap-x-12 relative lg:pr-12">
          <div className="absolute lg:block hidden w-[417px] h-[324px] top-[-158px] left-[-267px] md:top-[-42px] md:left-[-110px] lg:h-[297px] bg-contain bg-no-repeat mix-blend-screen bg-[url(/assets/img/common/emptyCubeDesktop.png)]" />
          <div className="hidden lg:block md:w-3/12 flex-1" />
          <div className="flex flex-col w-full lg:w-9/12 md:px-6 lg:px-0">
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
      <PrivacyPolicyContent post={post} />
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
