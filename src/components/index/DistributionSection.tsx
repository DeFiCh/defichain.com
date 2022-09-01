import { Container } from "@components/commons/Container";
import NextImage from "next/image";

import Nodes from "../../../public/assets/svg/hero/nodes-map-v2.svg";
import { useTranslation } from "next-i18next";

export function DistributionSection(): JSX.Element {
  const { t } = useTranslation("page-index");

  return (
    <section className="py-10 lg:py-16" data-testid="DistributionSection">
      <Container>
        <div data-testid="DistributionSection.Nodes">
          <div className="flex flex-col space-y-12">
            <h2
              className="text-2xl md:text-3xl font-medium"
              data-testid="Nodes.Title"
            >
              {t("DistributionSection.title")}
            </h2>
            <div
              className="text-lg md:text-xl w-full md:w-2/3"
              data-testid="Nodes.Desc"
            >
              {t("DistributionSection.desc")}
            </div>
          </div>
          <div className="w-4/5 mt-16 mx-auto" data-testid="Nodes.Image">
            <NextImage src={Nodes} />
          </div>
        </div>
      </Container>
    </section>
  );
}
