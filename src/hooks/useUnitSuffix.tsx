import BigNumber from "bignumber.js";
import { useRouter } from "next/router";

const units = {
  3: "K+",
  6: "M+",
  9: "B+",
  12: "T+",
};

const deUnits = {
  3: "Tsd.",
  6: "Mio.",
  9: "Mrd.",
  12: "Bio.",
};

interface UnitSuffix {
  suffix: string;
  value: string;
}

// Function to convert numbers to formatted numbers with units Eg.$161M ++ = Über xxx Mio. $
export function useUnitSuffix(value, decimalPlace = 0): UnitSuffix {
  const router = useRouter();

  const updatedValue = BigNumber(value);
  const places = updatedValue.e !== null ? Math.floor(updatedValue.e / 3) : 0;

  let suffix = "";
  if (router.locale === "de") {
    suffix = `${deUnits[places * 3] ?? ""}`;
  } else {
    suffix = `${units[places * 3] ?? ""}`;
  }
  const unitValueWithSuffix = {
    suffix,
    value,
  };

  if (suffix) {
    unitValueWithSuffix.value = updatedValue
      .dividedBy(1000 ** places)
      .toFormat(decimalPlace);
  }

  return unitValueWithSuffix;
}
