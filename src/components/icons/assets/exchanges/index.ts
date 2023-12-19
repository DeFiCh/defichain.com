import { SVGProps } from "react";
import Bittrex from "./Bittrex";
import Bitrue from "./Bitrue";
import Kucoin from "./Kucoin";
import Huobi from "./Huobi";
import Gateio from "./Gateio";
import Transak from "./Transak";
import Bybit from "./Bybit";
import Swyftx from "./Swyftx";
import Bitdotcom from "./Bitdotcom";
import Latoken from "./Latoken";
import Bitmart from "./Bitmart";
import EasycryptoAu from "./EasycryptoAu";
import EasycryptoNz from "./EasycryptoNz";
import Bake from "./Bake";
import Lock from "./Lock";
import ChangeNow from "./ChangeNow";

const mapping: Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element> =
  {
    Bittrex,
    Bitrue,
    Kucoin,
    Huobi,
    Gateio,
    Transak,
    Bybit,
    Swyftx,
    Bitdotcom,
    Latoken,
    Bitmart,
    EasycryptoAu,
    EasycryptoNz,
    Bake,
    Lock,
    ChangeNow,
  };

export function getExchangeLogo(
  name: string,
): (props: SVGProps<SVGSVGElement>) => JSX.Element {
  const Logo = mapping[name];
  return Logo;
}
