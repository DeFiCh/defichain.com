export function SecurityIcon({
  className,
  width = 41,
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
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        d="M20.3332 36.6666C20.3332 36.6666 33.6665 30 33.6665 20V8.33331L20.3332 3.33331L6.99988 8.33331V20C6.99988 30 20.3332 36.6666 20.3332 36.6666Z"
        stroke="#A6A6A6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
