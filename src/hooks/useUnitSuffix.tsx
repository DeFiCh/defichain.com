import BigNumber from "bignumber.js";

const units = {
  3: "K",
  6: "M",
  9: "B",
  12: "T",
};

interface UnitSuffix {
  suffix: string;
  value: string;
}

export function useUnitSuffix(value: string): UnitSuffix {
  const updatedValue = BigNumber(value);
  const places = updatedValue.e !== null ? Math.floor(updatedValue.e / 3) : 0;
  const suffix = `${units[places * 3] ?? ""}`;
  const unitSuffixReturnObj = {
    suffix,
    value,
  };

  if (suffix) {
    unitSuffixReturnObj.value = updatedValue
      .dividedBy(1000 ** places)
      .toFormat(0);
  }

  return unitSuffixReturnObj;
}
