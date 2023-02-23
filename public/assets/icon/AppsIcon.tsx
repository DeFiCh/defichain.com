export function AppsIcon({
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
        d="M15.4999 5.83325H7.83325C6.72868 5.83325 5.83325 6.72868 5.83325 7.83325V15.4999C5.83325 16.6045 6.72868 17.4999 7.83325 17.4999H15.4999C16.6045 17.4999 17.4999 16.6045 17.4999 15.4999V7.83325C17.4999 6.72868 16.6045 5.83325 15.4999 5.83325Z"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M32.1667 5.83325H24.5C23.3954 5.83325 22.5 6.72868 22.5 7.83325V15.4999C22.5 16.6045 23.3954 17.4999 24.5 17.4999H32.1667C33.2712 17.4999 34.1667 16.6045 34.1667 15.4999V7.83325C34.1667 6.72868 33.2712 5.83325 32.1667 5.83325Z"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M32.1667 22.5H24.5C23.3954 22.5 22.5 23.3954 22.5 24.5V32.1667C22.5 33.2712 23.3954 34.1667 24.5 34.1667H32.1667C33.2712 34.1667 34.1667 33.2712 34.1667 32.1667V24.5C34.1667 23.3954 33.2712 22.5 32.1667 22.5Z"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M15.4999 22.5H7.83325C6.72868 22.5 5.83325 23.3954 5.83325 24.5V32.1667C5.83325 33.2712 6.72868 34.1667 7.83325 34.1667H15.4999C16.6045 34.1667 17.4999 33.2712 17.4999 32.1667V24.5C17.4999 23.3954 16.6045 22.5 15.4999 22.5Z"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
