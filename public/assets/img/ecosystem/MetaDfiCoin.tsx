import Image from "next/image";
import MetaDFICoinIcon from "./meta-dfi-coin.png";
import MetaDFICoinIconHover from "./meta-dfi-coin-hover.png";
import MetaDFICoinEllipse from "./meta-dfi-coin-ellipse.png";

interface MetaDfiCoinProps {
  id: string;
  className?: string;
}

export function MetaDfiCoin(props: MetaDfiCoinProps): JSX.Element {
  const { id } = props;
  console.log(`${id}_ellipse`);
  return (
    <div>
      <Image
        src={MetaDFICoinEllipse}
        alt="Meta DFI Coin Ellipse"
        id={`${id}_ellipse`}
      />
      <Image src={MetaDFICoinIcon} alt="Meta DFI Coin Icon" id={id} />
    </div>
  );
}

export function MetaDfiCoinHover(props: MetaDfiCoinProps): JSX.Element {
  const { id } = props;
  return <Image src={MetaDFICoinIconHover} alt="Meta DFI Coin Icon" id={id} />;
}
