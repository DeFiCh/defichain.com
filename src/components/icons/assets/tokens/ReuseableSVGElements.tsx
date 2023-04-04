/**
 * Define reusable svg's element such as mask and gradient stroke in one place so that it can only be implemented once at top level
 * To prevent multiple declaration of `id` if they are placed within individual svg file, this will cause these element to not display accordingly
 */
export function ReusableSVGElements(): JSX.Element {
  return (
    <svg height={0} width={0} viewBox="0 0 0 0">
      <defs>
        <linearGradient
          id="dEUROC_linear_gradient"
          x1="38.3161"
          y1="39.8137"
          x2="5.12679"
          y2="6.62465"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00751664" stopColor="#8656EF" />
          <stop offset="0.97" stopColor="#1AA3FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
