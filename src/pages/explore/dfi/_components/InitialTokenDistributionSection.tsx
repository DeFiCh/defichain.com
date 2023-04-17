import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import classNames from "classnames";
import { Button } from "@components/commons/Buttons";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ProgressBar } from "./ProgressBar";
import {
  InitialTokenSectionIcons,
  InitialTokenSectionItem,
} from "./InitialTokenSectionItem";

export function InitialTokenDistributionSection() {
  const { t } = useTranslation("page-explore-dfi");
  const router = useRouter();

  return (
    <Container className="mb-[96px] md:mb-[108px] lg:mb-60">
      <section className="flex flex-col">
        <div className="flex flex-col gap-y-5">
          <SectionTitle text={t("initialTokenDistributionSection.title")} />
          <h2
            className={classNames(
              "tracking-[-0.02em] text-[40px] leading-[44px] text-dark-1000"
            )}
          >
            {t("initialTokenDistributionSection.subtitle")}
          </h2>
        </div>

        <Button
          text={t("initialTokenDistributionSection.button")}
          className="mt-6 w-fit px-10 py-3 lg:px-14 lg:py-4"
          href="/white-paper"
        />

        <ProgressBar value={49} containerClass="bg-dark-200 mt-16 mb-8" />

        <div className="flex lg:flex-row flex-col gap-x-[98px]">
          <div className="flex flex-row gap-x-3 lg:w-[48%]">
            <div className="text-brand-100 text-[32px] leading-9 lg:text-[52px] lg:leading-[52px]">
              {t("initialTokenDistributionSection.initialSupply.percentage")}
            </div>
            <div className="flex flex-col place-self-center">
              <div className="text-brand-100 font-bold leading-5 mt-[10px]">
                {t("initialTokenDistributionSection.initialSupply.title")}
              </div>

              <div className="mt-2">
                <span className="font-desc text-dark-700">
                  {t("initialTokenDistributionSection.initialSupply.desc")}
                  &nbsp;
                </span>
                <span className="text-dark-1000 font-desc font-semibold">
                  {t(
                    "initialTokenDistributionSection.initialSupply.descAirDrop"
                  )}
                </span>
                <span className="font-desc text-dark-700">,&nbsp;</span>
                <span className="text-dark-1000 font-desc font-semibold">
                  {t("initialTokenDistributionSection.initialSupply.descBurn")}
                </span>
                <span className="font-desc text-dark-700">,</span>
                <span className="font-desc text-dark-700">
                  &nbsp;
                  {router.locale === "zh-Hans" || router.locale === "zh-Hant"
                    ? ","
                    : t(
                        "initialTokenDistributionSection.initialSupply.descAnd"
                      )}
                  &nbsp;
                </span>
                <span className="text-dark-1000 font-desc font-semibold">
                  {t(
                    "initialTokenDistributionSection.initialSupply.descDestroy"
                  )}
                </span>
              </div>

              <div className="mt-[34.33px] flex flex-wrap gap-x-2 gap-y-[34.92px]">
                <InitialTokenSectionItem
                  desc={t(
                    "initialTokenDistributionSection.initialSupply.airDrop"
                  )}
                  icon={InitialTokenSectionIcons.AIRDROP}
                  percentage={t(
                    "initialTokenDistributionSection.initialSupply.airDropPercentage"
                  )}
                />
                <InitialTokenSectionItem
                  desc={t("initialTokenDistributionSection.initialSupply.burn")}
                  icon={InitialTokenSectionIcons.BURN}
                  percentage={t(
                    "initialTokenDistributionSection.initialSupply.burnPercentage"
                  )}
                />
                <InitialTokenSectionItem
                  desc={t(
                    "initialTokenDistributionSection.initialSupply.destroy"
                  )}
                  icon={InitialTokenSectionIcons.DESTROY}
                  percentage={t(
                    "initialTokenDistributionSection.initialSupply.destroyPercentage"
                  )}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row lg:gap-x-3 gap-x-5 lg:mt-0 mt-[90px] lg:w-[40%]">
            <div className="text-dark-1000 text-[32px] leading-9 lg:text-[52px] lg:leading-[52px]">
              {t("initialTokenDistributionSection.masternodes.percentage")}
            </div>
            <div className="flex flex-col lg:place-self-start place-self-center">
              <span className="text-dark-1000 font-bold leading-5">
                {t("initialTokenDistributionSection.masternodes.title")}
              </span>

              <div className="mt-2">
                <span className="font-desc text-dark-700">
                  {t("initialTokenDistributionSection.masternodes.desc")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
