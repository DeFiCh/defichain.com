import { SVGProps } from "react";
import Bitrue from "./Bitrue";
import Kucoin from "./Kucoin";
import Htx from "./Htx";
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
import CoinEx from "./CoinEx";

const mapping: Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element> =
  {
    Bitrue,
    Kucoin,
    Htx,
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
    CoinEx,
  };

export function getExchangeLogo(
  name: string,
): (props: SVGProps<SVGSVGElement>) => JSX.Element {
  const Logo = mapping[name];
  return Logo;
}
