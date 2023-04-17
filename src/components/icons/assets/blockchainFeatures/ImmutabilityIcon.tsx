import { SVGProps } from "react";

export function ImmutabilityIcon(props: SVGProps<SVGSVGElement>) {
  const { id, className } = props;
  return (
    <svg
      width="69"
      height="50"
      viewBox="0 0 69 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        id="immutability-icon-middle-mouse-out"
        d="M2.16677 35.3213L34.6429 23.4134L67.1191 35.3213L34.6429 47.2293L2.16677 35.3213Z"
        stroke="#A6A6A6"
      />
      <path
        d="M2.16677 37.2022L34.6429 25.2943L67.1191 37.2022L34.6429 49.1101L2.16677 37.2022Z"
        stroke="#A6A6A6"
      />
      <path
        id="immutability-icon-top-mouse-out"
        d="M34.6429 21L68.5715 33.4405L34.6429 45.881L0.714355 33.4405L34.6429 21Z"
        fill={`url('#${id}')`}
      />
      <defs>
        <linearGradient
          id={id}
          x1="-13.0691"
          y1="11.9288"
          x2="30.8701"
          y2="-25.6954"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
      </defs>
    </svg>

    // <svg
    //   width="50"
    //   height="29"
    //   viewBox="0 0 50 29"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={className}
    // >
    //   <path
    //     id="immutability-icon-middle-mouse-out"
    //     d="M2.16677 14.3213L34.6429 2.41341L67.1191 14.3213L34.6429 26.2293L2.16677 14.3213Z"
    //     stroke="#A6A6A6"
    //   />
    //   <path
    //     d="M2.16677 16.2022L34.6429 4.29427L67.1191 16.2022L34.6429 28.1101L2.16677 16.2022Z"
    //     stroke="#A6A6A6"
    //   />
    //   <path
    //     id="immutability-icon-top-mouse-out"
    //     d="M34.6429 0L68.5715 12.4405L34.6429 24.881L0.714355 12.4405L34.6429 0Z"
    //     fill={`url('#${id}')`}
    //   />
    //   <defs>
    //     <linearGradient
    //       id={id}
    //       x1="-13.0691"
    //       y1="-9.07118"
    //       x2="30.8701"
    //       y2="-46.6954"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop stopColor="#EC008C" />
    //       <stop offset="0.846071" stopColor="#5B10FF" />
    //       <stop offset="1" stopColor="#0468D6" />
    //     </linearGradient>
    //   </defs>
    // </svg>
  );
}

export function ImmutabilityIconHover(props: SVGProps<SVGSVGElement>) {
  const { className } = props;
  return (
    <svg
      width="68"
      height="50"
      viewBox="0 0 68 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        id="immutability-icon-middle"
        d="M1.3886 24.999L33.9286 12.4397L66.4685 24.999L33.9286 37.5583L1.3886 24.999Z"
        stroke="url(#paint0_linear_4153_20735)"
      />
      <path
        d="M1.3886 36.9048L33.9286 24.3455L66.4685 36.9048L33.9286 49.4641L1.3886 36.9048Z"
        stroke="url(#paint1_linear_4153_20735)"
      />
      <path
        id="immutability-icon-top"
        d="M33.9286 0L67.8571 13.0952L33.9286 26.1905L0 13.0952L33.9286 0Z"
        fill="url(#paint2_linear_4153_20735)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4153_20735"
          x1="-13.7835"
          y1="2.35517"
          x2="32.046"
          y2="-34.9255"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4153_20735"
          x1="-13.7835"
          y1="14.2609"
          x2="32.046"
          y2="-23.0198"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC008C" />
          <stop offset="0.846071" stopColor="#5B10FF" />
          <stop offset="1" stopColor="#0468D6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4153_20735"
          x1="-13.7835"
          y1="-9.54861"
          x2="32.046"
          y2="-46.8293"
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
