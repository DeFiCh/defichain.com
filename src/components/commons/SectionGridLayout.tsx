import { Button, SecondaryButton } from "@components/commons/Buttons";
import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import { HTMLAttributeAnchorTarget } from "react";

interface SectionGridLayoutProps {
  sectionTitle?: string;
  title: string;
  description: string;
  buttonText: string;
  isCTAButton?: boolean;
  isSecondaryButton?: boolean;
  href?: string;
  children;
  target?: HTMLAttributeAnchorTarget;
  testID: string;
}

export function SectionGridLayout(props: SectionGridLayoutProps): JSX.Element {
  const {
    sectionTitle,
    title,
    description,
    buttonText,
    isCTAButton,
    isSecondaryButton,
    href,
    children,
    target,
    testID,
  } = props;

  return (
    <section
      className="relative pb-24 pt-0 md:pb-28 lg:pb-[120px] lg:mb-[120px]"
      data-testid="whyDEXsection"
    >
      <Container className="flex flex-col justify-between lg:flex-row 2xl:max-w-[1920px] 2xl:mx-[300px]">
        <div className="flex lg:w-[551px] relative z-10">
          <div
            className="w-full flex flex-col"
            data-testid="masternodesBenefits.text"
          >
            {sectionTitle !== undefined && (
              <SectionTitle
                text={sectionTitle}
                customStyle="w-fit mb-5"
                testID={testID}
              />
            )}
            <h2
              className="text-[40px] mb-5 leading-[44px] tracking-[-0.02em] lg:text-6xl lg:leading-[72px] lg:tracking-normal"
              data-testid="title"
            >
              {title}
            </h2>
            <div
              className="text-dark-700 mb-8 lg:text-xl font-desc md:w-9/12 lg:w-10/12"
              data-testid="desc"
            >
              {description}
            </div>
            {isCTAButton === true && (
              <Button
                className="z-10 text-sm lg:text-base px-14 py-3 lg:py-4 w-fit"
                text={buttonText}
                href={href}
                target={target}
                testID={testID}
              />
            )}
            {isSecondaryButton === true && href !== undefined && (
              <SecondaryButton
                className="text-sm py-3 lg:py-4 px-14 w-full md:w-fit lg:text-base"
                text={buttonText}
                href={href}
                testID={testID}
              />
            )}
          </div>
        </div>
        <div className="z-0 justify-between md:gap-x-16 lg:w-[600px] lg:gap-x-[114px] w-full mt-16 md:mt-[86px] lg:mt-0">
          {children}
        </div>
      </Container>
    </section>
  );
}
