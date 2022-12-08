import { PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/legacy/image";
import { Container } from "@components/commons/Container";
import { TimeLine2022 } from "@components/index/roadmap/2022";
import { ExternalLink } from "@components/commons/link/ExternalLink";
import { TimeLine2021 } from "@components/index/roadmap/2021";
import { TimeLineFuture } from "@components/index/roadmap/Future";
import { TimeLine2020 } from "@components/index/roadmap/2020";
import { TimeLine2019 } from "@components/index/roadmap/2019";
import { useTranslation } from "next-i18next";

export function RoadmapSection(): JSX.Element {
  const { t } = useTranslation("page-index");

  return (
    <section className="bg-gray-50 py-10 lg:py-16" data-testid="RoadmapSection">
      <Container>
        <h2
          className="text-2xl md:text-3xl font-medium"
          data-testid="RoadmapSection.Title"
        >
          {t("RoadmapSection.title")}
        </h2>
      </Container>

      <TimeLine2022 />
      <TimeLine2021 />
      <TimeLineFuture />
      <TimeLine2020 />
      <TimeLine2019 />
    </section>
  );
}

export function TimeLineContainer(
  props: PropsWithChildren<{ testid: string; timeline: string; label?: string }>
): JSX.Element {
  return (
    <div data-testid={props.testid} className="pb-10 md:pb-20">
      <Container>
        <div className="my-12">
          <h3 className="inline mr-2 font-medium text-2xl">{props.timeline}</h3>
          <span className="text-gray-500 font-medium">{props.label}</span>
        </div>
      </Container>
      {props.children}
    </div>
  );
}

export function RoadmapCard(
  props: PropsWithChildren<{
    image: StaticImageData;
    month: string;
    alt: string;
    url?: string;
    desc: string;
  }>
): JSX.Element {
  return (
    <div className="w-[320px] shadow-lg rounded overflow-hidden">
      <div className="bg-white p-4 space-y-4 flex flex-col min-h-[160px]">
        <span className="font-medium text-xl">{props.month}</span>
        <div>
          {props.url !== undefined ? (
            <ExternalLink url={props.url}>{props.desc}</ExternalLink>
          ) : (
            <>{props.desc}</>
          )}
        </div>
      </div>
      <div className="flex">
        <Image
          src={props.image}
          alt={props.alt}
          title={props.alt}
          width={320}
          height={150}
          objectFit="cover"
          placeholder="empty"
          unoptimized
        />
      </div>
    </div>
  );
}
