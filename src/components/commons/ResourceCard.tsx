import { PropsWithChildren } from "react";
import { ExternalLink } from "@components/commons/link/ExternalLink";
import NextLink from "next/link";
import { Button } from "@components/commons/Buttons";

export function ResourceCard(
  props: PropsWithChildren<{
    external?: boolean;
    text: string;
    buttonText: string;
    url: string;
    testid: string;
  }>
): JSX.Element {
  return (
    <div className="p-1.5 w-full lg:w-1/2 flex">
      <div
        className="w-full rounded bg-gray-50 py-10 px-6 lg:px-10 flex flex-wrap flex-1"
        data-testid={props.testid}
      >
        <div className="w-full">{props.children}</div>

        <div className="w-full text-lg mt-4 flex-1">{props.text}</div>

        <div className="w-full mt-10">
          {(() => {
            if (props.external !== undefined) {
              return (
                <ExternalLink url={props.url}>
                  <a className="contents">
                    <Button text={props.buttonText} />
                  </a>
                </ExternalLink>
              );
            }

            return (
              <NextLink href={props.url} passHref>
                <a className="contents">
                  <Button text={props.buttonText} />
                </a>
              </NextLink>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
