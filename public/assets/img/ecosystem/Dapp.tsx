import { Video } from "@components/commons/Video";

interface WalletAppsProps {
  id: string;
}

export function WalletApps(props: WalletAppsProps): JSX.Element {
  const { id } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "-9.9em",
        right: "-3em",
      }}
    >
      <Video
        poster=""
        src="/assets/img/ecosystem/dapp.mov"
        width={500}
        height={500}
        id={id}
      />
    </div>
  );
}

export function WalletAppsHover(props: WalletAppsProps): JSX.Element {
  const { id } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "-9.9em",
        right: "-3em",
      }}
    >
      <Video
        poster=""
        id={id}
        src="/assets/img/ecosystem/dapp-hover.mov"
        width={500}
        height={500}
      />
    </div>
  );
}
