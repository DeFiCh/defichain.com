export function DeveloperResourceIcon({
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
        d="M20 33.3333H35"
        stroke="#A6A6A6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M27.5 5.83334C28.163 5.1703 29.0623 4.79781 30 4.79781C30.4643 4.79781 30.924 4.88926 31.353 5.06693C31.7819 5.24461 32.1717 5.50503 32.5 5.83334C32.8283 6.16164 33.0887 6.5514 33.2664 6.98035C33.4441 7.4093 33.5355 7.86905 33.5355 8.33334C33.5355 8.79763 33.4441 9.25738 33.2664 9.68633C33.0887 10.1153 32.8283 10.505 32.5 10.8333L11.6667 31.6667L5 33.3333L6.66667 26.6667L27.5 5.83334Z"
        stroke="#A6A6A6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
