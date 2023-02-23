export function SecurityIcon({
  className,
  width = 30,
  height = 36,
}: {
  className: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        d="M15 34.6667C15 34.6667 28.3333 28 28.3333 18V6.33333L15 1.33333L1.66667 6.33333V18C1.66667 28 15 34.6667 15 34.6667Z"
        stroke="#A6A6A6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
