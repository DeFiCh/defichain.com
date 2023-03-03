import { SVGProps } from "react";

export function SecurityIcon(props: SVGProps<SVGSVGElement>) {
  const { id, className } = props;
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="25" cy="25" r="24.5" stroke={`url('#${id}')`} />
      <circle cx="29.1662" cy="24.924" r="20.1818" stroke="#A6A6A6" />
      <circle cx="35.5291" cy="24.9237" r="13.8182" stroke="#A6A6A6" />
      <defs>
        <linearGradient
          id={id}
          x1="-10.1563"
          y1="-18.2292"
          x2="40.9235"
          y2="-34.2666"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SecurityIconHover(props: SVGProps<SVGSVGElement>) {
  const { className } = props;
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="25"
        cy="25"
        r="24.5"
        stroke="url(#paint0_linear_4153_20726)"
      />
      <circle
        id="security-icon-med-circle"
        cx="28.6818"
        cy="24.924"
        r="20.1818"
        stroke="url(#paint1_linear_4153_20726)"
      />
      <circle
        id="security-icon-small-circle"
        cx="34.3182"
        cy="24.9237"
        r="14.3182"
        fill="url(#paint2_linear_4153_20726)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4153_20726"
          x1="-10.1563"
          y1="-18.2292"
          x2="40.9235"
          y2="-34.2666"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4153_20726"
          x1="-0.401989"
          y1="-10.8383"
          x2="41.8549"
          y2="-24.1057"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4153_20726"
          x1="14.1832"
          y1="0.165127"
          x2="43.438"
          y2="-9.01996"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
