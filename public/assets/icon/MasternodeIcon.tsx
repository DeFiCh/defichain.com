export function MasternodeIcon({
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
        d="M35 26.6667V13.3334C34.9994 12.7488 34.8451 12.1747 34.5526 11.6686C34.26 11.1626 33.8396 10.7423 33.3333 10.45L21.6667 3.78337C21.1599 3.49081 20.5851 3.33679 20 3.33679C19.4149 3.33679 18.8401 3.49081 18.3333 3.78337L6.66667 10.45C6.16044 10.7423 5.73997 11.1626 5.44744 11.6686C5.1549 12.1747 5.0006 12.7488 5 13.3334V26.6667C5.0006 27.2513 5.1549 27.8254 5.44744 28.3314C5.73997 28.8375 6.16044 29.2578 6.66667 29.55L18.3333 36.2167C18.8401 36.5093 19.4149 36.6633 20 36.6633C20.5851 36.6633 21.1599 36.5093 21.6667 36.2167L33.3333 29.55C33.8396 29.2578 34.26 28.8375 34.5526 28.3314C34.8451 27.8254 34.9994 27.2513 35 26.6667Z"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M5.44922 11.6L19.9992 20.0166L34.5492 11.6"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M20 36.8V20"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
