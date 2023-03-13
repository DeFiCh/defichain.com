import Image from "next/image";
import MetaDFICoinIcon from "./meta-dfi-coin.png";
import MetaDFICoinIconHover from "./meta-dfi-coin-hover.png";

interface MetaDfiCoinProps {
  id: string;
  className?: string;
}

export function MetaDfiCoin(props: MetaDfiCoinProps): JSX.Element {
  const { id, className } = props;
  return (
    <Image
      src={MetaDFICoinIcon}
      alt="Meta DFI Coin Icon"
      id={id}
      className={className}
    />
  );
}

export function MetaDfiCoinHover(props: MetaDfiCoinProps): JSX.Element {
  const { id, className } = props;
  return (
    <Image
      src={MetaDFICoinIconHover}
      alt="Meta DFI Coin Icon"
      id={id}
      className={className}
    />
  );
}
