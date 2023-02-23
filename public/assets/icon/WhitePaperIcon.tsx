export function WhitePaperIcon({
  className,
  width = 40,
  height = 40,
}: {
  className: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        d="M23.3333 3.33334H10C9.11595 3.33334 8.2681 3.68453 7.64298 4.30965C7.01786 4.93477 6.66667 5.78261 6.66667 6.66667V33.3333C6.66667 34.2174 7.01786 35.0652 7.64298 35.6904C8.2681 36.3155 9.11595 36.6667 10 36.6667H30C30.8841 36.6667 31.7319 36.3155 32.357 35.6904C32.9821 35.0652 33.3333 34.2174 33.3333 33.3333V13.3333L23.3333 3.33334Z"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M23.3333 3.33334V13.3333H33.3333"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M26.6667 21.6667H13.3333"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M26.6667 28.3333H13.3333"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M16.6667 15H15H13.3333"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
