import { Video } from "@components/commons/Video";

interface WalletAppsProps {
  id: string;
}

export function WalletApps(props: WalletAppsProps): JSX.Element {
  const { id } = props;
  return (
    <div
      // to handle Video overlapping issue on Safari
      className="bg-dark-00"
      style={{
        position: "absolute",
        top: "-9.9em",
        right: "-3em",
      }}
    >
      <Video
        src="/assets/video/dapp.mov"
        width={500}
        height={500}
        id={`${id}_video`}
      />
    </div>
  );
}

export function WalletAppsHover(props: WalletAppsProps): JSX.Element {
  const { id } = props;
  return (
    <div
      className="bg-dark-00"
      style={{
        position: "absolute",
        top: "-9.9em",
        right: "-3em",
      }}
    >
      <Video
        id={`${id}_video_hover`}
        src="/assets/video/dapp-hover.mov"
        width={500}
        height={500}
      />
    </div>
  );
}
