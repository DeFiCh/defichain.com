import { useCallback } from "react";
import pageIndex from "../../public/locales/en-US/page-index.json";
import common from "../../public/locales/en-US/common.json";
import layout from "../../public/locales/en-US/layout.json";
import metachain from "../../public/locales/en-US/page-meta-chain.json";
import privacypolicy from "../../public/locales/en-US/page-privacypolicy.json";
import learn from "../../public/locales/en-US/page-learn.json";

interface TranslationOptions {
  returnObjects?: boolean; // Indicates whether to return objects
}

type FileProp =
  | "page-index"
  | "common"
  | "layout"
  | "page-meta-chain"
  | "page-privacypolicy"
  | "page-learn";

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
