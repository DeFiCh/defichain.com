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
        top: "-9.2em",
        right: "-4em",
      }}
    >
      <Video
        // TODO @chloe get png from Jon
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
        top: "-9.2em",
        right: "-4em",
      }}
    >
      <Video
        id={id}
        // TODO @chloe get png from Jon
        poster=""
        // TODO @chloe get updated vid from Jon
        src="/assets/img/ecosystem/dapp-hover.mov"
        width={500}
        height={500}
      />
    </div>
  );
}
