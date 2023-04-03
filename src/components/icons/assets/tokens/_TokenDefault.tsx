import { SVGProps } from "react";

export function _TokenDefault(
  symbol: string,
  isLoanToken?: boolean,
  id?: string
): (props: SVGProps<SVGSVGElement>) => JSX.Element {
  // TODO (@joeldavidw): Need to properly determine whether a token is LPS or DAT.

  const symbolParts = symbol.split("-");

  function TokenDefaultSymbol(props: SVGProps<SVGSVGElement>): JSX.Element {
    return (
      <svg width="1em" height="1em" viewBox="0 0 32 32" {...props}>
        <path
          fill="#000000"
          d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16c8.838 0 16-7.163 16-16S24.838 0 16 0z"
        />
        <text
          className="pointer-events-none"
          dominantBaseline="central"
          fill="white"
          fontSize={symbolParts[0].length < 5 ? "11" : "9.5"}
          fontWeight="700"
          fontFamily='"IBM Plex Sans Condensed", sans-serif'
          textAnchor="middle"
          x="50%"
          y="50%"
        >
          {symbolParts[0]}
        </text>
      </svg>
    );
  }

  function DefaultLoanToken(props: SVGProps<SVGSVGElement>): JSX.Element {
    const name = symbol.substring(0, 6).toUpperCase();
    return (
      <svg width="1em" height="1em" viewBox="0 0 36 36" fill="none" {...props}>
        <defs>
          <linearGradient
            id={id}
            x1="-1.8"
            y1="19"
            x2="38"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF01AF" />
            <stop offset="0.0703125" stopColor="#FB01AF" />
            <stop offset="0.169271" stopColor="#EF01B1" />
            <stop offset="0.289062" stopColor="#DB02B5" />
            <stop offset="0.408854" stopColor="#C004BA" />
            <stop offset="0.528646" stopColor="#9D06C0" />
            <stop offset="0.648438" stopColor="#7208C8" />
            <stop offset="0.815104" stopColor="#3F0BD1" />
            <stop offset="1" stopColor="#0E0EDB" />
          </linearGradient>
        </defs>
        <g clipPath="url(#clip0_1388_11287)">
          <path
            d="M0.25061 18C0.25061 8.19645 8.19706 0.25 18.0006 0.25C27.8053 0.25 35.7506 8.19644 35.7506 18C35.7506 27.8036 27.8053 35.75 18.0006 35.75C8.19706 35.75 0.25061 27.8036 0.25061 18Z"
            fill="#0E0A0D"
            strokeWidth={0.5}
            stroke={`url('#${id}')`}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <text
          x="50%"
          y={name.length > 4 ? "59%" : "62%"}
          fontSize={name.length > 4 ? 8 : 10}
          textAnchor="middle"
          fill="white"
          fontWeight="bold"
        >
          {name}
        </text>
      </svg>
    );
  }

  function PoolPairTokenSymbol(props: SVGProps<SVGSVGElement>): JSX.Element {
    return (
      <svg width="1em" height="1em" viewBox="0 0 32 32" {...props}>
        <path
          fill="#000000"
          d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16c8.838 0 16-7.163 16-16S24.838 0 16 0z"
        />
        <text
          className="pointer-events-none"
          fill="white"
          fontSize="9"
          fontWeight="700"
          fontFamily='"IBM Plex Sans Condensed", sans-serif'
          y="50%"
        >
          <tspan
            x="50%"
            y={symbolParts[0].length <= symbolParts[1].length ? "48%" : ""}
            textAnchor="middle"
          >
            {symbolParts[0]}
          </tspan>
          <tspan x="50%" dy="9" textAnchor="middle">
            {symbolParts[1]}
          </tspan>
        </text>
      </svg>
    );
  }

  if (symbolParts.length === 2) {
    return PoolPairTokenSymbol;
  }

  if (isLoanToken) {
    return DefaultLoanToken;
  }

  return TokenDefaultSymbol;
}
