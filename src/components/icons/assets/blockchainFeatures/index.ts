import { SVGProps } from "react";
import { ThroughputIcon } from "./ThroughputIcon";
import { ImmutabilityIcon } from "./ImmutabilityIcon";
import { VarietyIcon } from "./VarietyIcon";
import { SecurityIcon } from "./SecurityIcon";
import { DevelopmentIcon } from "./DevelopmentIcon";

const mapping: Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element> =
  {
    THROUGHPUT: ThroughputIcon,
    IMMUTABILITY: ImmutabilityIcon,
    VARIETY: VarietyIcon,
    SECURITY: SecurityIcon,
    DEVELOPMENT: DevelopmentIcon,
  };

// TODO(@defich): move assets into it's own repo where anyone can create pull request into.
//  Following a vector specification guideline, this allows anyone to create PR into that repo.

/**
 * @param {string} symbol of the asset icon
 * @return {(props: SVGProps<SVGSVGElement>) => JSX.Element}
 */
export function getBlockchainFeatureIcon(
  item: string
): (props: SVGProps<SVGSVGElement>) => JSX.Element {
  const Icon = mapping[`${item}`];
  return Icon;
}
