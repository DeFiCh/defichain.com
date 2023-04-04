import { Button } from "@components/commons/Buttons";
import { Container } from "@components/commons/Container";
import classNames from "classnames";
import { useTranslation } from "next-i18next";

export default function ERC20Section(): JSX.Element {
  const { t } = useTranslation("page-explore-dfi");
  const assetStyle =
    "left-1/2 transform -translate-x-1/2 -translate-y-[30%] top-[-30px] sm:-top-20 md:top-[-60px] lg:top-0";
  return (
    <Container className="relative pb-[96px] md:pb-[192px] lg:pb-[248px] text-center flex justify-center">
      <div className="max-w-[551px] flex flex-col items-center">
        <div
          className={classNames(
            "text-[40px] leading-[44px] tracking-[-0.02em]",
            "lg:text-6xl lg:leading-[72px] lg:tracking-normal"
          )}
        >
          {t("erc20Section.title")}
        </div>
        <div
          className={classNames(
            "pt-[20px] font-desc text-dark-800 text-base md:tracking-[0.03em]",
            "lg:text-xl lg:tracking-normal"
          )}
        >
          <p>{t("erc20Section.subtitle")}</p>
        </div>
        <Button
          text={t("erc20Section.buttonText")}
          className="mt-8 md:mt-[56px] lg:px-[72.5px] md:px-[130px] py-3 lg:py-4"
          href="https://blog.defichain.com/defichains-first-move-to-become-an-interoperable-defi-powerhouse/"
        />
        <div
          className={classNames(
            "pt-4 font-desc text-dark-800 text-sm md:text-base font-semibold"
          )}
        >
          <p>{t("erc20Section.contract")}</p>
        </div>
      </div>
      <div
        className={classNames(
          "absolute z-[-1] mix-blend-hard-light bg-contain bg-top w-[333.31px] inset-0 bg-no-repeat bg-[url(/assets/img/explore/erc20-dfi-coin.png)]",
          assetStyle
        )}
      />
      <div
        className={classNames(
          "absolute mix-blend-screen bg-contain bg-top w-[333.31px] inset-0 bg-no-repeat bg-[url(/assets/img/explore/erc20-dfi-coin-ellipse.png)]",
          assetStyle
        )}
      />
    </Container>
  );
}
