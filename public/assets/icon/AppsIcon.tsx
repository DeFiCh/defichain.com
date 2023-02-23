export function AppsIcon({
  className,
  width = 30,
  height = 30,
}: {
  className: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        d="M10.4999 0.833252H2.83325C1.72868 0.833252 0.833252 1.72868 0.833252 2.83325V10.4999C0.833252 11.6045 1.72868 12.4999 2.83325 12.4999H10.4999C11.6045 12.4999 12.4999 11.6045 12.4999 10.4999V2.83325C12.4999 1.72868 11.6045 0.833252 10.4999 0.833252Z"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M27.1667 0.833252H19.5C18.3954 0.833252 17.5 1.72868 17.5 2.83325V10.4999C17.5 11.6045 18.3954 12.4999 19.5 12.4999H27.1667C28.2712 12.4999 29.1667 11.6045 29.1667 10.4999V2.83325C29.1667 1.72868 28.2712 0.833252 27.1667 0.833252Z"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M27.1667 17.5H19.5C18.3954 17.5 17.5 18.3954 17.5 19.5V27.1667C17.5 28.2712 18.3954 29.1667 19.5 29.1667H27.1667C28.2712 29.1667 29.1667 28.2712 29.1667 27.1667V19.5C29.1667 18.3954 28.2712 17.5 27.1667 17.5Z"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M10.4999 17.5H2.83325C1.72868 17.5 0.833252 18.3954 0.833252 19.5V27.1667C0.833252 28.2712 1.72868 29.1667 2.83325 29.1667H10.4999C11.6045 29.1667 12.4999 28.2712 12.4999 27.1667V19.5C12.4999 18.3954 11.6045 17.5 10.4999 17.5Z"
        stroke="#A6A6A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
