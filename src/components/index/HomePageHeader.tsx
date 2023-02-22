import { Container } from "@components/commons/Container";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import dfiCoinGif from "../../../public/assets/svg/hero/dfi-coin-gif.gif";

export function HomePageHeader(): JSX.Element {
  const { t } = useTranslation("page-index");
  const separatedTitle = t("Header.title").split(" ");
  const firstWord = separatedTitle[0];
  separatedTitle.shift();

  return (
    <div className="flex flex-col items-center pb-24 mt-9" style={{}}>
      <Container className="flex items-center justify-between w-[1242.76px] lg:px-0">
        <div className="w-[479px]">
          <h1
            className="w-full text-[3xl] lg:text-[80px] lg:leading-[84px]"
            data-testid="Header.title"
          >
            <span className="text-brand-100">{firstWord} </span>
            {separatedTitle.join(" ")}
          </h1>
          <div className="mt-5">
            <div
              className="w-full text-lg md:text-xl text-dark-700"
              data-testid="Header.desc.main"
            >
              <span>{t("Header.desc")}</span>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={dfiCoinGif}
            alt="DFI coin gif"
            width={595}
            height={590}
            objectFit="cover"
          />
        </div>
      </Container>
    </div>
  );
}
