import { SVGProps } from "react";
import Bittrex from "./Bittrex";
import Bitrue from "./Bitrue";
import Dfx from "./Dfx";
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
import Cakedefi from "./Cakedefi";
import Lock from "./Lock";

const mapping: Record<string, (props: SVGProps<SVGElement>) => JSX.Element> = {
  Bittrex,
  Bitrue,
  Dfx,
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
  Cakedefi,
  Lock,
};

export function getExchangeLogo(
  name: string
): (props: SVGProps<SVGElement>) => JSX.Element {
  const Logo = mapping[name];
  return Logo;
}
