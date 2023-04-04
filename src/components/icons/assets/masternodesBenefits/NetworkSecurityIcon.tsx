import { SVGProps } from "react";

export function NetworkSecurityIcon(props: SVGProps<SVGSVGElement>) {
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
      <rect
        x="25"
        y="0.707107"
        width="34.3553"
        height="34.3553"
        rx="4.21404"
        transform="rotate(45 25 0.707107)"
        stroke="#D9D9D9"
      />
      <rect
        x="25"
        y="7.77815"
        width="23.7487"
        height="23.7487"
        rx="2.86639"
        transform="rotate(45 25 7.77815)"
        stroke="#D9D9D9"
      />
      <rect
        x="25"
        y="16.4991"
        width="11.7851"
        height="11.7851"
        rx="3.36639"
        transform="rotate(45 25 16.4991)"
        fill={`url('#${id}')`}
      />
      <defs>
        <linearGradient
          id={id}
          x1="22.6061"
          y1="12.2025"
          x2="34.6458"
          y2="8.42243"
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

export function NetworkSecurityIconHover(props: SVGProps<SVGSVGElement>) {
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
      <rect
        width="50"
        height="50"
        rx="6.66667"
        fill="url(#paint0_linear_5105_60145)"
      />
      <rect
        x="25"
        y="14.0405"
        width="17.3333"
        height="17.3333"
        rx="4.2608"
        transform="rotate(45 25 14.0405)"
        fill="black"
        stroke="black"
      />
      <rect
        x="25"
        y="33.3334"
        width="16.6667"
        height="16.6667"
        rx="4.7608"
        transform="rotate(-135 25 33.3334)"
        fill="url(#paint1_linear_5105_60145)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5105_60145"
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
          id="paint1_linear_5105_60145"
          x1="21.6146"
          y1="27.257"
          x2="38.6412"
          y2="21.9112"
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
