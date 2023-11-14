import { PageHeader } from "@components/commons/PageHeader";
import { Container } from "@components/commons/Container";
import { UserConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PropsWithChildren } from "react";
import { InferGetStaticPropsType } from "next";
import { Disclosure } from "@headlessui/react";
import { BsChevronCompactDown } from "react-icons/bs";
import { Head } from "@components/commons/Head";
import { HowToCard } from "./_components/HowToCard";
import { getAllPosts } from "./utils/api";

interface PostI {
  title: string;
  description: string;
  slug: string;
}

interface LearnPageProps {
  props: {
    _nextI18Next: {
      initialI18nStore: any;
      initialLocale: string;
      userConfig: UserConfig | null;
    };
    posts: PostI[];
  };
}

export default function LearnPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
): JSX.Element {
  const { t } = useTranslation(["page-learn"]);

  return (
    <>
      <Head title={t("Head.title")} description={t("Head.desc")} />
      <PageHeader title={t("Header.title")}>
        <div className="mt-10 flex flex-wrap">
          <div
            className="w-full text-2xl text-gray-900"
            data-testid="Header.desc.main"
          >
            {t("Header.desc")}
          </div>
        </div>
      </PageHeader>
      <Container>
        <HowToSection posts={props.posts} />
        <FAQSection />
      </Container>
    </>
  );
}

function HowToSection(
  props: PropsWithChildren<{ posts: PostI[] }>,
): JSX.Element {
  return (
    <section className="my-16">
      <div
        className="text-2xl lg:text-3xl font-medium w-full md:text-left mb-5"
        data-testid="HowToSection.Title"
      >
        <h2>How To Guides</h2>
      </div>

      <div className="flex flex-wrap pb-10 -m-1">
        {(() =>
          props.posts.map((post) => (
            <HowToCard
              title={post.title}
              desc={post.description}
              slug={post.slug}
              key={post.slug}
            />
          )))()}
      </div>
    </section>
  );
}

function FAQSection(): JSX.Element {
  const { t } = useTranslation(["page-learn"]);
  const entries: Array<{ title: string; desc: string }> = t(
    "FAQSection.entries",
    { returnObjects: true },
  );

  return (
    <section className="my-16">
      <h2
        className="text-2xl lg:text-3xl font-medium w-full md:text-left mb-5"
        data-testid="FAQSection"
      >
        FAQ
      </h2>

      {entries.map((entry) => (
        <FAQEntry title={entry.title} desc={entry.desc} key={entry.title} />
      ))}
    </section>
  );

  function FAQEntry(props: { title: string; desc: string }): JSX.Element {
    return (
      <div data-testid="FAQEntry">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="py-2.5 text-xl font-medium">
                <div className="flex items-center text-left">
                  <div>
                    <BsChevronCompactDown
                      size={28}
                      className={`${open ? "rotate-180" : ""}`}
                    />
                  </div>
                  <div className="ml-4" data-testid="FAQEntry.Title">
                    {props.title}
                  </div>
                </div>
              </Disclosure.Button>
              <Disclosure.Panel
                className="text-gray-600 text-lg mb-10 ml-11"
                data-testid="FAQEntry.Desc"
              >
                {props.desc}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    );
  }
}

export async function getStaticProps({ locale }): Promise<LearnPageProps> {
  const allPosts: PostI[] = getAllPosts(
    ["slug", "title", "description"],
    locale,
  ) as PostI[];

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "layout",
        "page-learn",
      ])),
      posts: allPosts,
    } as any,
  };
}
