import { PageError } from "@components/commons/error/PageError";

export default function InternalError(): JSX.Element {
  return (
    <PageError
      title="Something Went Wrong - DeFiChain"
      subtitle="Error 500"
      errorDesc="500 - Internal Server Error"
      text="BACK HOME"
    />
  );
}
