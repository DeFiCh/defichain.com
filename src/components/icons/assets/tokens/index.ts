import { SVGProps } from "react";
import { dEUROC } from "@components/icons/assets/tokens/dEUROC";
import { dBCH } from "./dBCH";
import { dBTC } from "./dBTC";
import { dDFI } from "./dDFI";
import { dDOGE } from "./dDOGE";
import { dETH } from "./dETH";
import { DFI } from "./DFI";
import { dLTC } from "./dLTC";
import { dUSDC } from "./dUSDC";
import { dUSDT } from "./dUSDT";
import { DUSD } from "./DUSD";
import { _TokenDefault } from "./_TokenDefault";

const mapping: Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element> =
  {
    _UTXO: DFI,
    DFI,
    "DFI (UTXO)": DFI,
    "DFI (Token)": DFI,
    dBCH,
    dBTC,
    dDFI,
    dDOGE,
    dETH,
    dLTC,
    dUSDT,
    dUSDC,
    dDUSD: DUSD,
    DUSD,
    dEUROC,
  };

// TODO(@defich): move assets into it's own repo where anyone can create pull request into.
//  Following a vector specification guideline, this allows anyone to create PR into that repo.

/**
 * @param {string} symbol of the asset icon
 * @param isLoanToken
 * @return {(props: SVGProps<SVGSVGElement>) => JSX.Element}
 */
export function getAssetIcon(
  symbol: string,
  isLoanToken?: boolean,
  id?: string
): (props: SVGProps<SVGSVGElement>) => JSX.Element {
  const Icon = mapping[`d${symbol}`];
  if (Icon === undefined) {
    return _TokenDefault(symbol, isLoanToken, id);
  }
  return Icon;
}
