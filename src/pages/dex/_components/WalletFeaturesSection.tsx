import { useTranslation } from "next-i18next";
import { Wallet } from "@components/icons/assets/wallet-features/Wallet";
import { Restore } from "@components/icons/assets/wallet-features/Restore";
import { Dex } from "@components/icons/assets/wallet-features/Dex";
import { Mine } from "@components/icons/assets/wallet-features/Mine";
import { Explore } from "@components/icons/assets/wallet-features/Explore";
import { Tokens } from "@components/icons/assets/wallet-features/Tokens";
import { Console } from "@components/icons/assets/wallet-features/Console";
import { Network } from "@components/icons/assets/wallet-features/Network";
import { Staking } from "@components/icons/assets/wallet-features/Staking";
import { FeatureCard } from "@components/commons/FeatureCard";
import Image from "next/legacy/image";
import { Section } from "@components/commons/Section";
import liquidityImage from "../../../../public/assets/img/dex/liquidity.png";

export function WalletFeaturesSection(): JSX.Element {
  const { t } = useTranslation("page-dex");

  return (
    <div className="my-16">
      <div className="flex flex-wrap items-start pt-8 pb-16">
        <div className="w-full lg:w-1/2 lg:px-8">
          <Image
            src={liquidityImage}
            layout="responsive"
            objectFit="cover"
            alt={t("LiquidityMining.title")}
            data-testid="LiquidityMiningSection.image"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-wrap lg:mt-2 xl:mt-4 lg:px-10 xl:px-14">
          <div className="text-center lg:text-left text-gray-900">
            <h2
              className="text-2xl lg:text-3xl font-medium"
              data-testid="LiquidityMiningSection.title"
            >
              {t("LiquidityMining.title")}
            </h2>
            <div
              className="text-lg lg:text-xl mt-8"
              data-testid="LiquidityMiningSection.desc"
            >
              {t("LiquidityMining.desc")}
            </div>
          </div>
        </div>
      </div>

      <Section
        title={t("WalletFeaturesSection.title")}
        testId="WalletFeaturesSection"
      >
        <div className="w-full flex flex-wrap -m-5 lg:-m-10">
          <FeatureCard
            title={t("WalletFeaturesSection.HDWallet.title")}
            desc={t("WalletFeaturesSection.HDWallet.desc")}
            testid="WalletFeaturesSection.HDWallet"
          >
            <Wallet fontSize={48} className="fill-primary-500" />
          </FeatureCard>
          <FeatureCard
            title={t("WalletFeaturesSection.BackupAndRestore.title")}
            desc={t("WalletFeaturesSection.BackupAndRestore.desc")}
            testid="WalletFeaturesSection.BackupAndRestore"
          >
            <Restore fontSize={50} className="fill-primary-500" />
          </FeatureCard>
          <FeatureCard
            title={t("WalletFeaturesSection.DecentralizedExchange.title")}
            desc={t("WalletFeaturesSection.DecentralizedExchange.desc")}
            testid="WalletFeaturesSection.DecentralizedExchange"
          >
            <Dex fontSize={50} className="fill-primary-500" />
          </FeatureCard>

          <FeatureCard
            title={t("WalletFeaturesSection.LiquidityMining.title")}
            desc={t("WalletFeaturesSection.LiquidityMining.desc")}
            testid="WalletFeaturesSection.LiquidityMining"
          >
            <Mine fontSize={50} className="fill-primary-500" />
          </FeatureCard>
          <FeatureCard
            title={t("WalletFeaturesSection.TokensSupport.title")}
            desc={t("WalletFeaturesSection.TokensSupport.desc")}
            testid="WalletFeaturesSection.TokensSupport"
          >
            <Tokens fontSize={50} className="fill-primary-500" />
          </FeatureCard>
          <FeatureCard
            title={t("WalletFeaturesSection.MiniExplorer.title")}
            desc={t("WalletFeaturesSection.MiniExplorer.desc")}
            testid="WalletFeaturesSection.MiniExplorer"
          >
            <Explore fontSize={50} className="fill-primary-500" />
          </FeatureCard>

          <FeatureCard
            title={t("WalletFeaturesSection.Masternodes.title")}
            desc={t("WalletFeaturesSection.Masternodes.desc")}
            testid="WalletFeaturesSection.Masternodes"
          >
            <Staking fontSize={50} className="fill-primary-500" />
          </FeatureCard>
          <FeatureCard
            title={t("WalletFeaturesSection.Console.title")}
            desc={t("WalletFeaturesSection.Console.desc")}
            testid="WalletFeaturesSection.Console"
          >
            <Console fontSize={50} className="fill-primary-500" />
          </FeatureCard>
          <FeatureCard
            title={t("WalletFeaturesSection.NetworkSelection.title")}
            desc={t("WalletFeaturesSection.NetworkSelection.desc")}
            testid="WalletFeaturesSection.NetworkSelection"
          >
            <Network fontSize={50} className="fill-primary-500" />
          </FeatureCard>
        </div>
      </Section>
    </div>
  );
}
