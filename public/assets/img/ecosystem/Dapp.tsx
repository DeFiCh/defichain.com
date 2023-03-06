import Image from "next/image";
import WalletAppsIcon from "./wallet-apps.png";
import WalletAppsIconHover from "./wallet-apps-hover.png";

interface WalletAppsProps {
  id: string;
  className?: string;
}

export function WalletApps(props: WalletAppsProps): JSX.Element {
  const { id, className } = props;
  return (
    <Image
      src={WalletAppsIcon}
      alt="Wallet Apps Icon"
      id={id}
      className={className}
    />
  );
}

export function WalletAppsHover(props: WalletAppsProps): JSX.Element {
  const { id, className } = props;
  return (
    <Image
      src={WalletAppsIconHover}
      alt="Wallet Apps Icon"
      id={id}
      className={className}
    />
  );
}
