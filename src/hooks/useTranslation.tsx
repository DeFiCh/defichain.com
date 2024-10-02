import { useCallback } from "react";
import pageIndex from "../../public/locales/en-US/page-index.json";
import common from "../../public/locales/en-US/common.json";
import layout from "../../public/locales/en-US/layout.json";
import metachain from "../../public/locales/en-US/page-meta-chain.json";
import privacypolicy from "../../public/locales/en-US/page-privacypolicy.json";
import learn from "../../public/locales/en-US/page-learn.json";
import exploreWallets from "../../public/locales/en-US/page-explore-wallets.json";
import exploreMNs from "../../public/locales/en-US/page-explore-masternodes.json";
import exploreDFI from "../../public/locales/en-US/page-explore-dfi.json";
import exploreDex from "../../public/locales/en-US/page-explore-dex.json";
import media from "../../public/locales/en-US/page-media.json";

interface TranslationOptions {
  returnObjects?: boolean; // Indicates whether to return objects
}

type FileProp =
  | "page-index"
  | "common"
  | "layout"
  | "page-meta-chain"
  | "page-privacypolicy"
  | "page-learn"
  | "page-explore-wallets"
  | "page-explore-masternodes"
  | "page-explore-dfi"
  | "page-explore-dex"
  | "page-media";

// Properly typed getNestedValue function
function getNestedValue<T>(obj: T, path: string): any {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
}

// Translation function that accepts a file, a key, and options
function t(file: FileProp, key: string, options?: TranslationOptions): any {
  let result: any;

  if (file === "page-index") {
    result = getNestedValue(pageIndex, key);
  } else if (file === "common") {
    result = getNestedValue(common, key);
  } else if (file === "layout") {
    result = getNestedValue(layout, key);
  } else if (file === "page-meta-chain") {
    result = getNestedValue(metachain, key);
  } else if (file === "page-privacypolicy") {
    result = getNestedValue(privacypolicy, key);
  } else if (file === "page-learn") {
    result = getNestedValue(learn, key);
  } else if (file === "page-explore-wallets") {
    result = getNestedValue(exploreWallets, key);
  } else if (file === "page-explore-masternodes") {
    result = getNestedValue(exploreMNs, key);
  } else if (file === "page-explore-dfi") {
    result = getNestedValue(exploreDFI, key);
  } else if (file === "page-explore-dex") {
    result = getNestedValue(exploreDex, key);
  } else if (file === "page-media") {
    result = getNestedValue(media, key);
  }

  // If options.returnObjects is true, return the result directly (presuming it's an object)
  if (options?.returnObjects) {
    if (Array.isArray(result)) {
      return result;
    }
    if (result) {
      return [result];
    }
    return [];
  }

  return result || "";
}

// Custom hook that takes the translation file as a prop
export function useTranslation(file: FileProp) {
  const translate = useCallback(
    (key: string, options?: TranslationOptions) => t(file, key, options), // Pass the file and options to the t function
    [file],
  );

  return { t: translate };
}
