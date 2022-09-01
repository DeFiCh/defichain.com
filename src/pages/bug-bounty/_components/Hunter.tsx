import { ExternalLink } from "@components/commons/link/ExternalLink";
import { BiLinkExternal } from "react-icons/bi";
import ReactNumberFormat from "react-number-format";

/**
 * Container implementation that is part of the design language.
 */

interface BountyI {
  name: string;
  payout: {
    dfi: number;
    usd: number;
  };
  txid: string;
}

interface HunterI {
  name: string;
  github: string;
  bounties: BountyI[];
}

export function Hunter(props: { index: number; hunter: HunterI }): JSX.Element {
  return (
    <div className="flex flex-wrap bg-gray-50 rounded-lg p-4 lg:px-8 lg:py-6">
      <div className="w-full lg:w-2/6 flex flex-wrap items-start">
        <div className="w-full">
          <h3 className="inline text-xl font-medium">
            <span className="mr-2">{props.index + 1}.</span>
            {props.hunter.name}
          </h3>
          {props.hunter.github !== undefined && (
            <>
              <ExternalLink
                className="ml-2 text-base"
                url={`https://github.com/${props.hunter.github}`}
              >
                @{props.hunter.github}
              </ExternalLink>
            </>
          )}
        </div>
      </div>
      <div className="w-full lg:w-4/6 flex flex-wrap mt-1 md:mt-0 -my-1 justify-end">
        {props.hunter.bounties.map((bounty) => {
          return (
            <div
              className="w-full flex flex-wrap text-base py-1.5 border-b"
              key={bounty.name}
            >
              <div className="w-full lg:w-2/3 font-medium">{bounty.name}</div>
              <div className="w-full lg:w-1/3 flex flex-wrap mt-1 lg:mt-0 lg:justify-end items-center">
                <ReactNumberFormat
                  value={bounty.payout.dfi}
                  thousandSeparator
                  decimalScale={0}
                  suffix=" DFI"
                  displayType="text"
                />
                <ReactNumberFormat
                  value={bounty.payout.usd}
                  thousandSeparator
                  decimalScale={0}
                  prefix="($"
                  suffix=" USD)"
                  displayType="text"
                  className="ml-2 text-gray-400"
                />
                <ExternalLink
                  url={`https://defiscan.live/transactions/${bounty.txid}`}
                >
                  <BiLinkExternal
                    size={20}
                    className="ml-2 text-primary-500 cursor-pointer"
                  />
                </ExternalLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
