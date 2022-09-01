import { WhaleApiClient } from "@defichain/whale-api-client";
import { createContext, PropsWithChildren, useContext, useMemo } from "react";

const WhaleApiClientContext = createContext<WhaleApiClient>(undefined as any);

export function getWhaleApiClient(): WhaleApiClient {
  return newWhaleClient();
}

export function useWhaleApiClient(): WhaleApiClient {
  return useContext(WhaleApiClientContext);
}

export function WhaleProvider(
  props: PropsWithChildren<any>
): JSX.Element | null {
  const memo = useMemo(() => {
    const api = newWhaleClient();
    return {
      api: api,
    };
  }, []);

  return (
    <WhaleApiClientContext.Provider value={memo.api}>
      {props.children}
    </WhaleApiClientContext.Provider>
  );
}

function newWhaleClient(): WhaleApiClient {
  return new WhaleApiClient({
    url: "https://ocean.defichain.com",
    network: "mainnet",
    version: "v0",
  });
}
