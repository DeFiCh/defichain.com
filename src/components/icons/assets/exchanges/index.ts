import { SVGProps } from "react";
import Bitrue from "./Bitrue";
import Latoken from "./Latoken";
import Bake from "./Bake";
import Lock from "./Lock";

const mapping: Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element> =
  {
    Bitrue,
    Latoken,
    Bake,
    Lock,
  };

export function getExchangeLogo(
  name: string,
): (props: SVGProps<SVGSVGElement>) => JSX.Element {
  const Logo = mapping[name];
  return Logo;
}
