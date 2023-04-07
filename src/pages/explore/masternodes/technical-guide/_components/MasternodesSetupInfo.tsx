import { useState, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import { Container } from "@components/commons/Container";
import Image from "next/image";
import CreateMN from "../../../../../../public/assets/img/mnTechnicalGuide/create.png";
import TableOfContents from "./TableOfContents";
import {
  ContentHeader,
  ContentSubHeader,
  ContentDescription,
  Code,
  Step,
} from "./GuideComponents";

export function MasternodesSetupInfo() {
  const { t } = useTranslation("page-explore-masternodes");
  const [downloadLinks, setDownloadLinks] = useState("");

  useEffect(() => {
    const baseUrl = `https://api.github.com/repos/DeFiCh/ain/releases/latest`;
    fetch(baseUrl)
      .then((res) => res.json())
      .then((assets) => {
        if (assets === undefined) {
          return;
        }
        setDownloadLinks(assets.html_url);
      });
  }, []);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Container className="flex flex-row gap-x-12 lg:mb-[216px] lg:pr-12">
      <div className="hidden h-full sticky top-[100px] lg:block md:w-3/12 lg:pt-[64px] flex-1">
        <TableOfContents parentReference={contentRef} />
      </div>
      <div className="flex flex-col w-full mt-12 mb-24 md:mb-16 lg:mb-10 lg:mt-0 lg:w-9/12">
        <div className="p-0 md:p-6 lg:px-0 lg:py-16" ref={contentRef}>
          {/* Introduction start */}
          <div>
            <ContentHeader
              id={t("technicalGuide.intro.toc")}
              text={t("technicalGuide.intro.title")}
            />
            <ContentDescription text={t("technicalGuide.intro.desc")} />
            <ContentDescription
              text={t("technicalGuide.intro.note")}
              containerStyle="mt-5 lg:mt-12"
              customStyle="!text-sm tracking-normal lg:!text-base"
            />
          </div>
          {/* Introduction end */}

          {/* Setup start */}
          <div className="mt-[72px] lg:mt-[76px]">
            <ContentHeader
              id={t("technicalGuide.setup.toc")}
              text={t("technicalGuide.setup.title")}
            />
            <ContentDescription text={t("technicalGuide.setup.desc")} />

            {/* Creating start */}
            <ContentSubHeader
              id={t("technicalGuide.setup.create.toc")}
              text={t("technicalGuide.setup.create.title")}
              customStyle="mt-[72px] lg:mt-[76px]"
            />
            <ContentDescription
              text={t("technicalGuide.setup.create.desc")}
              containerStyle="mt-6"
              customStyle="!text-base lg:!text-xl"
            />
            <Image src={CreateMN} alt="Create" className="mt-6" />
            {/* Creating end */}

            {/* Operating start */}
            <ContentSubHeader
              id={t("technicalGuide.setup.operate.toc")}
              text={t("technicalGuide.setup.operate.title")}
              customStyle="mt-[72px] lg:mt-[76px]"
            />
            <ContentDescription
              text={t("technicalGuide.setup.operate.desc")}
              customStyle="!text-base lg:!text-xl"
            />

            {/* Step1 start */}
            <Step count="1" />
            <ContentSubHeader
              text={t("technicalGuide.setup.operate.step1.title")}
            />
            <ContentDescription
              text={t("technicalGuide.setup.operate.step1.desc1")}
              customStyle="!text-base lg:!text-xl"
            />
            <ContentDescription
              text={t("technicalGuide.setup.operate.step1.desc2")}
              customStyle="!text-base lg:!text-xl inline-block mr-1"
              containerStyle="block mt-7 lg:mt-8"
            >
              <ContentDescription
                text={t("technicalGuide.setup.operate.step1.desc3")}
                customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold"
                containerStyle="inline-block"
              />
            </ContentDescription>
            <ContentDescription
              text={t("technicalGuide.setup.operate.step1.desc4")}
              customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold"
              containerStyle="mt-0"
            />
            {/* Step1 end */}

            {/* Step2 start */}
            <Step count="2" />
            <ContentSubHeader
              text={t("technicalGuide.setup.operate.step2.title")}
            />
            <ContentDescription
              text={t("technicalGuide.setup.operate.step2.desc1")}
              customStyle="!text-base lg:!text-xl"
            >
              <a
                href={downloadLinks}
                rel="noreferrer"
                target="_blank"
                className="font-desc text-base lg:text-xl tracking-[0.03em] lg:tracking-normal text-electric ml-1 underline"
              >
                {t("technicalGuide.setup.operate.step2.link")}
              </a>
              .
            </ContentDescription>
            <ContentDescription
              text={t("technicalGuide.setup.operate.step2.desc2")}
              customStyle="!text-base lg:!text-xl"
            />
            <Code text={t("technicalGuide.setup.operate.step2.code1")} />
            {/* Step2 end */}

            {/* Step3 start */}
            <Step count="3" />
            <ContentSubHeader
              text={t("technicalGuide.setup.operate.step3.title")}
            />
            <ContentDescription
              text={t("technicalGuide.setup.operate.step3.desc1")}
              customStyle="!text-base lg:!text-xl"
            />
            <Code text={t("technicalGuide.setup.operate.step3.code1")} />
            <ContentDescription
              text={t("technicalGuide.setup.operate.step3.desc2")}
              customStyle="!text-base lg:!text-xl"
            />
            <Code text={t("technicalGuide.setup.operate.step3.code2")} />
            {/* Step3 end */}

            {/* Step4 start */}
            <Step count="4" />
            <ContentSubHeader
              text={t("technicalGuide.setup.operate.step4.title")}
            />
            <ContentDescription
              text={t("technicalGuide.setup.operate.step4.desc1")}
              customStyle="!text-base lg:!text-xl inline-block mr-1"
              containerStyle="block mt-5"
            >
              <ContentDescription
                text={t("technicalGuide.setup.operate.step4.desc2")}
                customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold"
                containerStyle="contents"
              />
              <ContentDescription
                text={t("technicalGuide.setup.operate.step4.desc3")}
                customStyle="!text-base lg:!text-xl"
                containerStyle="contents"
              />
            </ContentDescription>
            <ContentDescription
              text={t("technicalGuide.setup.operate.step4.desc4")}
              customStyle="!text-base lg:!text-xl inline-block mr-1"
              containerStyle="block mt-5"
            >
              <ContentDescription
                text={t("technicalGuide.setup.operate.step4.desc5")}
                customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold mr-1"
                containerStyle="contents"
              />
              <ContentDescription
                text={t("technicalGuide.setup.operate.step4.desc6")}
                customStyle="!text-base lg:!text-xl"
                containerStyle="contents"
              />
            </ContentDescription>
            <Code text={t("technicalGuide.setup.operate.step4.code1")} />
            <ContentDescription
              text={t("technicalGuide.setup.operate.step4.desc7")}
              customStyle="!text-base lg:!text-xl"
            />
            {/* Step4 end */}

            {/* Step5 start */}
            <Step count="5" />
            <ContentSubHeader
              text={t("technicalGuide.setup.operate.step5.title")}
            />
            <ContentDescription
              text={t("technicalGuide.setup.operate.step5.desc1")}
              customStyle="!text-base lg:!text-xl inline-block mr-1"
              containerStyle="block mt-5"
            >
              <ContentDescription
                text={t("technicalGuide.setup.operate.step5.desc2")}
                customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold mr-1"
                containerStyle="contents"
              />
              <ContentDescription
                text={t("technicalGuide.setup.operate.step5.desc3")}
                customStyle="!text-base lg:!text-xl"
                containerStyle="contents"
              />
            </ContentDescription>
            <Code text={t("technicalGuide.setup.operate.step5.code1")} />
            <ContentDescription
              text={t("technicalGuide.setup.operate.step5.desc4")}
              customStyle="!text-base lg:!text-xl"
            />
            <ContentDescription
              text={t("technicalGuide.setup.operate.step5.desc5")}
              customStyle="!text-base lg:!text-xl"
            />
            <Code text={t("technicalGuide.setup.operate.step5.code2")} />
            <ContentDescription
              text={t("technicalGuide.setup.operate.step5.desc6")}
              customStyle="!text-base lg:!text-xl"
            />
            {/* Step5 end */}

            {/* Step6 start */}
            <Step count="6" />
            <ContentSubHeader
              text={t("technicalGuide.setup.operate.step6.title")}
            />
            <ContentDescription
              text={t("technicalGuide.setup.operate.step6.desc1")}
              customStyle="!text-base lg:!text-xl"
            />
            <Code text={t("technicalGuide.setup.operate.step6.code1")} />
            <ContentDescription
              text={t("technicalGuide.setup.operate.step6.desc2")}
              customStyle="!text-base lg:!text-xl inline-block mr-1"
              containerStyle="block mt-5"
            >
              <ContentDescription
                text={t("technicalGuide.setup.operate.step6.desc3")}
                customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold mr-1"
                containerStyle="contents"
              />
              <ContentDescription
                text={t("technicalGuide.setup.operate.step6.desc4")}
                customStyle="!text-base lg:!text-xl"
                containerStyle="contents"
              />
            </ContentDescription>
            {/* Step6 end */}

            {/* Step7 start */}
            <Step count="7" />
            <ContentSubHeader
              text={t("technicalGuide.setup.operate.step7.title")}
            />
            <ContentDescription
              text={t("technicalGuide.setup.operate.step7.desc1")}
              customStyle="!text-base lg:!text-xl inline-block mr-1"
              containerStyle="block mt-5"
            >
              <ContentDescription
                text={t("technicalGuide.setup.operate.step7.desc2")}
                customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold mr-1"
                containerStyle="contents"
              />
            </ContentDescription>
            <ContentDescription
              text={t("technicalGuide.setup.operate.step7.desc3")}
              customStyle="!text-base lg:!text-xl inline-block mr-1"
              containerStyle="block mt-5"
            >
              <ContentDescription
                text={t("technicalGuide.setup.operate.step7.desc4")}
                customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold mr-1"
                containerStyle="contents"
              />
              <ContentDescription
                text={t("technicalGuide.setup.operate.step7.desc5")}
                customStyle="!text-base lg:!text-xl"
                containerStyle="contents"
              />
            </ContentDescription>
            <Code
              text={t("technicalGuide.setup.operate.step7.code1")}
              textStyle="whitespace-pre-line"
            />
            <ContentDescription
              text={t("technicalGuide.setup.operate.step7.desc6")}
              customStyle="!text-base lg:!text-xl inline-block contents"
              containerStyle="block mt-8"
            >
              <ContentDescription
                text={t("technicalGuide.setup.operate.step7.desc7")}
                customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold ml-1"
                containerStyle="contents"
              />
              <ContentDescription
                text={t("technicalGuide.setup.operate.step7.desc8")}
                customStyle="!text-base lg:!text-xl"
                containerStyle="contents"
              />
            </ContentDescription>

            <ContentDescription
              text={t("technicalGuide.setup.operate.step7.desc9")}
              customStyle="!text-base lg:!text-xl inline-block contents"
              containerStyle="block mt-5"
            >
              <ContentDescription
                text={t("technicalGuide.setup.operate.step7.desc10")}
                customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold ml-1"
                containerStyle="contents"
              />
              <ContentDescription
                text={t("technicalGuide.setup.operate.step7.desc11")}
                customStyle="!text-base lg:!text-xl"
                containerStyle="contents"
              />
            </ContentDescription>
            <ContentDescription
              text={t("technicalGuide.setup.operate.step7.desc12")}
              customStyle="!text-base lg:!text-xl"
            />
            <Code
              text={t("technicalGuide.setup.operate.step7.code2")}
              customStyle="mt-8"
            />
            <ContentDescription
              text={t("technicalGuide.setup.operate.step7.desc13")}
              customStyle="!text-base lg:!text-xl"
              containerStyle="mt-8"
            />
            <ContentDescription
              text={t("technicalGuide.setup.operate.step7.desc14")}
              customStyle="!text-base lg:!text-xl inline-block contents"
              containerStyle="block mt-5"
            >
              <ContentDescription
                text={t("technicalGuide.setup.operate.step7.desc15")}
                customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold mx-1"
                containerStyle="contents"
              />
              <ContentDescription
                text={t("technicalGuide.setup.operate.step7.desc16")}
                customStyle="!text-base lg:!text-xl"
                containerStyle="contents"
              />
            </ContentDescription>
            {/* Step7 end */}
            {/* Operating end */}

            {/* Delegating start */}
            <ContentSubHeader
              id={t("technicalGuide.setup.delegate.toc")}
              text={t("technicalGuide.setup.delegate.title")}
              customStyle="mt-[72px] lg:mt-[76px]"
            />
            <ContentDescription
              text={t("technicalGuide.setup.delegate.desc")}
              customStyle="!text-base lg:!text-xl"
            />
            {/* step2-4 start */}
            <Step count="2-4" />
            <ContentSubHeader
              text={t("technicalGuide.setup.delegate.step2-4.title")}
            />
            <ContentDescription
              text={t("technicalGuide.setup.delegate.step2-4.desc1")}
              customStyle="!text-base lg:!text-xl inline-block contents"
              containerStyle="block mt-5"
            >
              <ContentDescription
                text={t("technicalGuide.setup.delegate.step2-4.desc2")}
                customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold mx-1 !text-electric"
                containerStyle="contents"
              />
              <ContentDescription
                text={t("technicalGuide.setup.delegate.step2-4.desc3")}
                customStyle="!text-base lg:!text-xl"
                containerStyle="contents"
              />
            </ContentDescription>
            {/* step2-4 end */}
            {/* step5 start */}
            <Step count="5" />
            <ContentSubHeader
              text={t("technicalGuide.setup.delegate.step5.title")}
            />
            <ContentDescription
              text={t("technicalGuide.setup.delegate.step5.desc1")}
              customStyle="!text-base lg:!text-xl"
            />
            <Code text={t("technicalGuide.setup.delegate.step5.code1")} />
            <ContentDescription
              text={t("technicalGuide.setup.delegate.step5.desc2")}
              customStyle="!text-base lg:!text-xl inline-block contents"
              containerStyle="block mt-5"
            >
              <ContentDescription
                text={t("technicalGuide.setup.delegate.step5.desc3")}
                customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold mx-1"
                containerStyle="contents"
              />
              <ContentDescription
                text={t("technicalGuide.setup.delegate.step5.desc4")}
                customStyle="!text-base lg:!text-xl"
                containerStyle="contents"
              />
              <ContentDescription
                text={t("technicalGuide.setup.delegate.step5.desc5")}
                customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold mx-1"
                containerStyle="contents"
              />
              <ContentDescription
                text={t("technicalGuide.setup.delegate.step5.desc6")}
                customStyle="!text-base lg:!text-xl"
                containerStyle="contents"
              />
            </ContentDescription>
            <ContentDescription
              text={t("technicalGuide.setup.delegate.step5.desc7")}
              customStyle="!text-base lg:!text-xl"
            />
            <ContentDescription
              text={t("technicalGuide.setup.delegate.step5.desc8")}
              customStyle="!text-base lg:!text-xl"
            />
            <Code text={t("technicalGuide.setup.delegate.step5.code2")} />
            <ContentDescription
              text={t("technicalGuide.setup.delegate.step5.desc9")}
              customStyle="!text-base lg:!text-xl"
            />
            <ContentDescription
              text={t("technicalGuide.setup.delegate.step5.desc10")}
              customStyle="!text-base lg:!text-xl inline-block contents"
              containerStyle="block mt-5"
            >
              <ContentDescription
                text={t("technicalGuide.setup.delegate.step5.desc11")}
                customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold mx-1"
                containerStyle="contents"
              />
              <ContentDescription
                text={t("technicalGuide.setup.delegate.step5.desc12")}
                customStyle="!text-base lg:!text-xl"
                containerStyle="contents"
              />
            </ContentDescription>
            {/* step5 end */}
            {/* Delegating end */}

            {/* Running multiple MN start */}
            <ContentSubHeader
              id={t("technicalGuide.setup.multiple.toc")}
              text={t("technicalGuide.setup.multiple.title")}
              customStyle="mt-[72px] lg:mt-[76px]"
            />
            <ContentDescription
              text={t("technicalGuide.setup.multiple.desc1")}
              customStyle="!text-base lg:!text-xl inline-block contents"
              containerStyle="block mt-5"
            >
              <ContentDescription
                text={t("technicalGuide.setup.multiple.desc2")}
                customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold mx-1"
                containerStyle="contents"
              />
              <ContentDescription
                text={t("technicalGuide.setup.multiple.desc3")}
                customStyle="!text-base lg:!text-xl"
                containerStyle="contents"
              />
              <ContentDescription
                text={t("technicalGuide.setup.multiple.desc4")}
                customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold mx-1"
                containerStyle="contents"
              />
            </ContentDescription>
            <Code
              text={t("technicalGuide.setup.multiple.code1")}
              customStyle="mt-12"
              textStyle="whitespace-pre-line"
            />
            <ContentDescription
              text={t("technicalGuide.setup.multiple.desc5")}
              customStyle="!text-base lg:!text-xl"
              containerStyle="mt-12"
            />
            {/* Running multiple MN end */}

            {/* Resigning MN start */}
            <ContentSubHeader
              id={t("technicalGuide.setup.resigning.toc")}
              text={t("technicalGuide.setup.resigning.title")}
              customStyle="mt-[72px] lg:mt-[76px]"
            />
            <ContentDescription
              text={t("technicalGuide.setup.resigning.desc1")}
              customStyle="!text-base lg:!text-xl"
            />
            <Code
              text={t("technicalGuide.setup.resigning.code1")}
              customStyle="mt-12"
            />
            {/* Resigning MN end */}

            {/* States MN start */}
            <ContentSubHeader
              id={t("technicalGuide.setup.states.toc")}
              text={t("technicalGuide.setup.states.title")}
              customStyle="mt-[72px] lg:mt-[76px]"
            />
            <ContentDescription
              text={t("technicalGuide.setup.states.desc1")}
              customStyle="!text-base lg:!text-xl inline-block contents"
              containerStyle="block mt-5"
            >
              <ContentDescription
                text={t("technicalGuide.setup.states.desc2")}
                customStyle="!text-base lg:!text-xl !text-dark-1000 font-semibold mx-1"
                containerStyle="contents"
              />
              <ContentDescription
                text={t("technicalGuide.setup.states.desc3")}
                customStyle="!text-base lg:!text-xl"
                containerStyle="contents"
              />
            </ContentDescription>
            <ContentDescription
              text={t("technicalGuide.setup.states.desc4")}
              customStyle="!text-base lg:!text-xl"
            />
            <Code
              text={t("technicalGuide.setup.states.code1")}
              textStyle="whitespace-pre-line"
            />

            <ContentSubHeader
              text={t("technicalGuide.setup.states.preEnabled.title")}
              customStyle="mt-5 lg:mt-12 font-semibold"
            />
            <ContentDescription
              text={t("technicalGuide.setup.states.preEnabled.desc1")}
              customStyle="!text-base lg:!text-xl"
              containerStyle="mt-2.5"
            />
            <ContentSubHeader
              text={t("technicalGuide.setup.states.enabled.title")}
              customStyle="mt-6 lg:mt-8 font-semibold"
            />
            <ContentDescription
              text={t("technicalGuide.setup.states.enabled.desc1")}
              customStyle="!text-base lg:!text-xl"
              containerStyle="mt-2.5"
            />
            <ContentSubHeader
              text={t("technicalGuide.setup.states.registered.title")}
              customStyle="mt-6 lg:mt-8 font-semibold"
            />
            <ContentDescription
              text={t("technicalGuide.setup.states.registered.desc1")}
              customStyle="!text-base lg:!text-xl"
              containerStyle="mt-2.5"
            />
            <ContentSubHeader
              text={t("technicalGuide.setup.states.resigned.title")}
              customStyle="mt-6 lg:mt-8 font-semibold"
            />
            <ContentDescription
              text={t("technicalGuide.setup.states.resigned.desc1")}
              customStyle="!text-base lg:!text-xl"
              containerStyle="mt-2.5"
            />
            <ContentSubHeader
              text={t("technicalGuide.setup.states.preBanned.title")}
              customStyle="mt-6 lg:mt-8 font-semibold"
            />
            <ContentDescription
              text={t("technicalGuide.setup.states.preBanned.desc1")}
              customStyle="!text-base lg:!text-xl"
              containerStyle="mt-2.5"
            />
            <ContentSubHeader
              text={t("technicalGuide.setup.states.banned.title")}
              customStyle="mt-6 lg:mt-8 font-semibold"
            />
            <ContentDescription
              text={t("technicalGuide.setup.states.banned.desc1")}
              customStyle="!text-base lg:!text-xl"
              containerStyle="mt-2.5"
            />
            {/* States MN end */}
          </div>
          {/* Setup end */}
        </div>
      </div>
    </Container>
  );
}
