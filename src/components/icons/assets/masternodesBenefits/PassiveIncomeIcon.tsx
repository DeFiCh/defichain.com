import { SVGProps } from "react";

export function PassiveIncomeIcon(props: SVGProps<SVGSVGElement>) {
  const { id, className } = props;
  return (
    <svg
      width="63"
      height="50"
      viewBox="0 0 63 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="25.0484" cy="25" r="24.5" stroke="#D9D9D9" />
      <circle cx="48.4355" cy="25.8064" r="14.5161" fill={`url('#${id}')`} />
      <path
        d="M50.6032 20.2129C51.2054 20.3161 51.7473 20.4967 52.229 20.7548C52.728 20.9957 53.1495 21.2967 53.4936 21.658C53.8377 22.0193 54.1043 22.4236 54.2936 22.8709C54.4828 23.301 54.5774 23.757 54.5774 24.2387V24.7032H52.6161V24.3935C52.6161 23.8258 52.4269 23.3441 52.0484 22.9484C51.6871 22.5527 51.2054 22.2774 50.6032 22.1226V25.8129C52.0312 25.9849 53.1151 26.3806 53.8549 27C54.6118 27.6021 54.9903 28.4365 54.9903 29.5032V29.658C54.9903 30.8107 54.586 31.7398 53.7774 32.4451C52.986 33.1333 51.928 33.5204 50.6032 33.6064V35.1806H48.7452V33.5548C47.9882 33.4344 47.3344 33.2279 46.7839 32.9355C46.2506 32.6258 45.8032 32.2645 45.442 31.8516C45.0979 31.4215 44.8398 30.9656 44.6678 30.4838C44.4957 29.9849 44.4097 29.486 44.4097 28.9871V28.3677H46.371V28.6774C46.371 29.5032 46.5774 30.1656 46.9903 30.6645C47.4032 31.1634 47.9882 31.4989 48.7452 31.6709V27.4645C47.4549 27.2924 46.4656 26.9226 45.7774 26.3548C45.1065 25.7699 44.771 24.9613 44.771 23.929V23.7742C44.771 23.2236 44.8742 22.7419 45.0807 22.329C45.3043 21.8989 45.5968 21.5376 45.9581 21.2451C46.3194 20.9355 46.7409 20.6946 47.2226 20.5226C47.7043 20.3333 48.2118 20.2129 48.7452 20.1613V18.5613H50.6032V20.2129ZM52.9774 29.658C52.9774 29.0559 52.7882 28.6086 52.4097 28.3161C52.0312 28.0236 51.429 27.8086 50.6032 27.6709V31.7484C51.343 31.6623 51.9194 31.4387 52.3323 31.0774C52.7624 30.7161 52.9774 30.243 52.9774 29.658ZM46.7839 23.7742C46.7839 24.2559 46.9215 24.6516 47.1968 24.9613C47.4893 25.2537 48.0054 25.4688 48.7452 25.6064V22.0193C48.1946 22.1053 47.7301 22.2946 47.3516 22.5871C46.9731 22.8795 46.7839 23.2752 46.7839 23.7742Z"
        fill="#D9D9D9"
      />
      <defs>
        <linearGradient
          id={id}
          x1="28.0222"
          y1="0.705604"
          x2="57.6814"
          y2="-8.60646"
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

export function PassiveIncomeIconHover(props: SVGProps<SVGSVGElement>) {
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
      <circle cx="25" cy="25" r="25" fill="url(#paint0_linear_5105_60293)" />
      <circle
        cx="25"
        cy="25"
        r="12.9032"
        fill="black"
        stroke="black"
        strokeWidth="1.6129"
      />
      <path
        d="M26.3613 18.6C26.9634 18.7032 27.5054 18.8838 27.9871 19.1419C28.486 19.3828 28.9075 19.6838 29.2516 20.0451C29.5957 20.4064 29.8624 20.8107 30.0516 21.258C30.2409 21.6881 30.3355 22.144 30.3355 22.6258V23.0903H28.3742V22.7806C28.3742 22.2129 28.185 21.7311 27.8065 21.3354C27.4452 20.9397 26.9634 20.6645 26.3613 20.5096V24.2C27.7893 24.372 28.8731 24.7677 29.6129 25.3871C30.3699 25.9892 30.7484 26.8236 30.7484 27.8903V28.0451C30.7484 29.1978 30.3441 30.1268 29.5355 30.8322C28.7441 31.5204 27.686 31.9075 26.3613 31.9935V33.5677H24.5032V31.9419C23.7462 31.8215 23.0925 31.615 22.5419 31.3225C22.0086 31.0129 21.5613 30.6516 21.2 30.2387C20.8559 29.8086 20.5979 29.3526 20.4258 28.8709C20.2538 28.372 20.1677 27.8731 20.1677 27.3742V26.7548H22.129V27.0645C22.129 27.8903 22.3355 28.5526 22.7484 29.0516C23.1613 29.5505 23.7462 29.886 24.5032 30.058V25.8516C23.2129 25.6795 22.2237 25.3096 21.5355 24.7419C20.8645 24.1569 20.529 23.3483 20.529 22.3161V22.1613C20.529 21.6107 20.6323 21.129 20.8387 20.7161C21.0624 20.286 21.3548 19.9247 21.7161 19.6322C22.0774 19.3225 22.4989 19.0817 22.9807 18.9096C23.4624 18.7204 23.9699 18.6 24.5032 18.5483V16.9483H26.3613V18.6ZM28.7355 28.0451C28.7355 27.443 28.5462 26.9957 28.1678 26.7032C27.7893 26.4107 27.1871 26.1957 26.3613 26.058V30.1354C27.1011 30.0494 27.6774 29.8258 28.0903 29.4645C28.5204 29.1032 28.7355 28.6301 28.7355 28.0451ZM22.5419 22.1613C22.5419 22.643 22.6796 23.0387 22.9548 23.3483C23.2473 23.6408 23.7634 23.8559 24.5032 23.9935V20.4064C23.9527 20.4924 23.4882 20.6817 23.1097 20.9742C22.7312 21.2666 22.5419 21.6623 22.5419 22.1613Z"
        fill="url(#paint1_linear_5105_60293)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5105_60293"
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
          id="paint1_linear_5105_60293"
          x1="14.4919"
          y1="1.81112"
          x2="31.8025"
          y2="-1.53349"
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
