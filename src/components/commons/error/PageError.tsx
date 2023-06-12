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
      <Head title={title} />

      <Container className="pt-[93px] pb-[98px] md:pt-[164px] md:pb-[92px] lg:pt-[180px] lg:pb-[150px] relative">
        <section className="flex flex-col text-start items-start md:text-center md:items-center justify-center">
          <div className="text-error text-sm font-desc w-full">{subtitle}</div>
          <SectionSubTitle
            customStyle="!text-5xl !leading-[52px] !tracking-normal lg:!text-[80px] lg:!leading-[84px]"
            text={title}
            testID="page-error"
          />
          <div className="text-base tracking-[0.03em] lg:tracking-normal lg:text-xl lg:leading-8 text-dark-500 mt-6 font-desc max-w-[509px]">
            {errorDesc}
          </div>
          <div className="flex w-full md:justify-center mt-6 lg:mt-12">
            <Button
              text={text}
              className="text-sm w-fit leading-5 lg:text-base lg:leading-6 py-3 px-14 lg:py-4"
              href="/"
              testID="page-error"
            />
          </div>
        </section>
        <div
          className={classNames(
            "absolute bg-contain bg-no-repeat z-[-1]",
            "lg:w-[725.44px] lg:h-[363.08px] lg:right-[-21rem] lg:top-0",
            "md:rotate-90 w-[505.52px] md:h-[253.01px] md:right-[-18rem] md:top-[10rem]",
            "rotate-90 w-[433.23px] h-[216.83px] right-[-14rem] top-[9rem]",
            "bg-[url('/assets/img/error/error-bg-1.png')]"
          )}
        />
      </Container>
    </>
  );
}
