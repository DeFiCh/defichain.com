import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import classNames from "classnames";
import { Button } from "@components/commons/Buttons";
import { useTranslation } from "next-i18next";
import { ProgressBar } from "./ProgressBar";
import {
  InitialTokenSectionIcons,
  InitialTokenSectionItem,
} from "./InitialTokenSectionItem";

export function InitialTokenDistributionSection() {
  const { t } = useTranslation("page-explore-dfi");

  return (
    <Container className="mb-[96px]">
      <div className="flex flex-col">
        <div className="flex flex-col gap-y-5">
          <SectionTitle text={t("initialTokenDistributionSection.title")} />
          <div
            className={classNames(
              "tracking-[-0.02em] text-[40px] leading-[44px] text-dark-1000"
            )}
          >
            {t("initialTokenDistributionSection.subtitle")}
          </div>
        </div>

        <Button
          text={t("initialTokenDistributionSection.button")}
          className="mt-6 w-fit px-10 py-3"
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
                <span className="font-desc text-dark-700">&nbsp;and&nbsp;</span>
                <span className="text-dark-1000 font-desc font-semibold">
                  {t(
                    "initialTokenDistributionSection.initialSupply.descDestroy"
                  )}
                </span>
              </div>

              <div className="mt-[34.33px] flex flex-wrap gap-y-[34.92px]">
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
                  className="mx-[21.5px] md:ml-[64.33px] md:mr-[91.33px] lg:ml-[52.33px] lg:mr-[83.33px]"
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
              <div className="text-dark-1000 font-bold leading-5">
                {t("initialTokenDistributionSection.masternodes.title")}
              </div>

              <div className="mt-2">
                <span className="font-desc text-dark-700">
                  {t("initialTokenDistributionSection.masternodes.desc")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
