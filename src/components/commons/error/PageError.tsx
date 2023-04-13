import { Head } from "@components/commons/Head";
import { Container } from "@components/commons/Container";
import { Button } from "@components/commons/Buttons";
import { SectionSubTitle } from "@components/commons/SectionSubTitle";
import classNames from "classnames";

export function PageError(props: {
  title: string;
  subtitle: string;
  errorDesc: string;
  text: string;
}): JSX.Element {
  const { title, subtitle, errorDesc, text } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Container className="lg:pt-[210px] lg:pb-[370px] relative">
        <h1 className="h-80 flex flex-col text-center items-center justify-center">
          <div className="text-error text-sm font-desc">{subtitle}</div>
          <SectionSubTitle text={title} />
          <div className="text-xl leading-8 text-dark-500 mt-6 font-desc max-w-[509px]">
            {errorDesc}
          </div>
          <div className="flex w-full justify-center mt-12">
            <Button
              text={text}
              className="w-fit px-10 py-3 lg:px-14 lg:py-4"
              href="/"
            />
          </div>
        </h1>
        <div
          className={classNames(
            "absolute bg-contain bg-no-repeat",
            "lg:w-[725.44px] lg:h-[363.08px] lg:right-[-21rem] lg:top-0",
            "bg-[url('/assets/img/error/error-bg-1.png')]"
          )}
        />
        <div
          className={classNames(
            "absolute bg-contain bg-no-repeat",
            "lg:w-[772.13px] lg:h-[386.45px] lg:left-[-3rem] lg:bottom-[8rem]",
            "bg-[url('/assets/img/error/error-bg-2.png')]"
          )}
        />
      </Container>
    </>
  );
}
