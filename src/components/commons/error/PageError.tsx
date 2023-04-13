import { Head } from "@components/commons/Head";
import { Container } from "@components/commons/Container";
import { Button } from "@components/commons/Buttons";
import { SectionSubTitle } from "@components/commons/SectionSubTitle";

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

      <Container className="py-10">
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
      </Container>
    </>
  );
}
