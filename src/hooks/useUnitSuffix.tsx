import BigNumber from "bignumber.js";

const units = {
  3: "K",
  6: "M",
  9: "B",
  12: "T",
};

export enum UnitSuffixReturnValue {
  SUFFIX = "suffix",
  VALUE = "value",
}

export function useUnitSuffix(
  value: string,
  returnValue?: UnitSuffixReturnValue
): string | BigNumber {
  const updatedValue = BigNumber(value);
  const places = updatedValue.e !== null ? Math.floor(updatedValue.e / 3) : 0;
  const suffix = `${units[places * 3] ?? ""}`;

  if (returnValue === UnitSuffixReturnValue.SUFFIX) {
    return suffix;
  }

  if (returnValue) {
    return updatedValue.dividedBy(1000 ** places).toFormat(0);
  }
  return updatedValue.dividedBy(1000 ** places).toFormat(0, {
    decimalSeparator: ".",
    suffix,
  });
}
