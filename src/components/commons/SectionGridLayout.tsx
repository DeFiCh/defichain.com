import { Button, SecondaryButton } from "@components/commons/Buttons";
import { Container } from "@components/commons/Container";
import { SectionTitle } from "@components/commons/SectionTitle";
import classNames from "classnames";
import { HTMLAttributeAnchorTarget } from "react";

interface SectionGridLayoutProps {
  displayId?: string;
  sectionTitle?: string;
  isCenterAligned?: boolean;
  title: string;
  customTitleStyles?: string;
  description: string;
  buttonText?: string;
  isCTAButton?: boolean;
  isSecondaryButton?: boolean;
  href?: string;
  children;
  target?: HTMLAttributeAnchorTarget;
  testID: string;
}

export function SectionGridLayout(props: SectionGridLayoutProps): JSX.Element {
  const {
    displayId,
    sectionTitle,
    isCenterAligned,
    title,
    customTitleStyles,
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
      className="relative pb-24 pt-0 md:pb-28 lg:pb-[120px] lg:mb-[120px] scroll-mt-40"
      id={displayId}
      data-testid={testID}
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
                customStyle={classNames("w-fit mb-5", {
                  "md:mx-auto lg:mx-0": isCenterAligned,
                })}
                testID={testID}
              />
            )}
            <h2
              className={classNames(
                "text-[40px] mb-5 leading-[44px] tracking-[-0.02em] lg:text-6xl lg:leading-[72px] lg:tracking-normal",
                {
                  "md:text-center md:mx-auto md:max-w-[642px] lg:text-left lg:mx-0":
                    isCenterAligned,
                },
                customTitleStyles
              )}
              data-testid="title"
            >
              {title}
            </h2>
            <div
              className={classNames(
                "text-dark-700 mb-8 lg:text-xl font-desc tracking-[0.03em] lg:tracking-normal w-full",
                {
                  "md:text-center md:max-w-[642px] md:mx-auto lg:text-left lg:mx-0 mb-0 text-xl":
                    isCenterAligned,
                }
              )}
              data-testid="desc"
            >
              {description}
            </div>
            {isCTAButton === true && buttonText && (
              <Button
                className="z-10 text-sm lg:text-base px-14 py-3 lg:py-4 w-fit"
                text={buttonText}
                href={href}
                target={target}
                testID={testID}
              />
            )}
            {isSecondaryButton === true && href !== undefined && buttonText && (
              <SecondaryButton
                className="text-sm py-3 lg:py-4 px-14 w-full md:w-fit lg:text-base"
                text={buttonText}
                href={href}
                testID={testID}
              />
            )}
          </div>
        </div>
        <div
          className={classNames(
            "z-0 justify-between md:gap-x-16 lg:w-[600px] lg:gap-x-[114px] w-full mt-16 md:mt-[86px] lg:mt-0",
            {
              "md:text-center md:mx-auto lg:text-left lg:mx-0 lg:!mt-0 !mt-16":
                isCenterAligned,
            }
          )}
        >
          {children}
        </div>
      </Container>
    </section>
  );
}
