import { Button, LinkButton } from "@components/commons/Buttons";
import { Container } from "@components/commons/Container";
import classNames from "classnames";
import { useTranslation } from "next-i18next";

export default function ERC20Section(): JSX.Element {
  const { t } = useTranslation("page-explore-dfi");
  const assetStyle =
    "bg-contain bg-top w-[333.31px] inset-0 bg-no-repeat left-1/2 transform -translate-x-1/2 -translate-y-[30%] top-[-30px] md:top-[-30px] lg:top-0";
  const title = t("erc20Section.title").split(" ");

  return (
    <Container className="relative pb-24 md:pb-48 lg:pb-[248px] text-center flex justify-center">
      <section className="max-w-[551px] flex flex-col items-center">
        <h2
          data-testid="erc-20-title"
          className={classNames(
            "text-[40px] leading-[44px] tracking-[-0.02em] ",
            "lg:text-6xl lg:leading-[72px] lg:tracking-normal"
          )}
        >
          <span>{title[0]} </span>
          <span className="whitespace-nowrap">{title[1]}</span>
        </h2>
        <div
          data-testid="erc-20-desc"
          className={classNames(
            "pb-8 lg:pb-12 pt-5 font-desc text-dark-800 text-base md:tracking-[0.03em]",
            "lg:text-xl lg:tracking-normal"
          )}
        >
          <p>{t("erc20Section.subtitle1")}</p>
          <p className="mt-5">{t("erc20Section.subtitle2")}</p>
        </div>
        <Button
          text={t("erc20Section.buttonText")}
          className="lg:px-[72.5px] md:px-[130px] py-3 lg:py-4"
          href="https://blog.defichain.com/defichains-first-move-to-become-an-interoperable-defi-powerhouse/"
          testID="erc-20-learn-more"
        />
        <LinkButton
          buttonText={t("erc20Section.contract")}
          href="https://etherscan.io/token/0x8Fc8f8269ebca376D046Ce292dC7eaC40c8D358A"
          diagonalArrow
          className="pt-4 text-dark-800 text-sm md:text-base font-semibold hover:accent-dfc-gradient-text cursor-pointer"
        />
      </section>
      <div
        className={classNames(
          "absolute z-[-2] mix-blend-hard-light bg-[url(/assets/img/explore/erc20-dfi-coin.png)]",
          assetStyle
        )}
      />
      <div
        className={classNames(
          "absolute z-[-1] mix-blend-screen bg-[url(/assets/img/explore/erc20-dfi-coin-ellipse.png)]",
          assetStyle
        )}
      />
    </Container>
  );
}
