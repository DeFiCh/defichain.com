import { SVGProps } from "react";

export function dETH(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <circle cx={16} cy={16} r={16} fill="#E0E5FB" />
      <path
        fill="#FFF"
        d="M23.5 17.616l-7.502 10.379v-6.027l7.502-4.352zm-7.502-4.744v7.701L8.5 16.22l7.498-3.348zm0-8.872l7.497 12.22-7.497-3.35V4z"
      />
      <path
        fill="#627EEA"
        fillOpacity={0.8}
        d="M23.5 17.616l-7.502 10.379v-6.027l7.502-4.352zm-7.502-4.744v7.701L8.5 16.22l7.498-3.348zm0-8.872l7.497 12.22-7.497-3.35V4z"
      />
      <path
        fill="#FFF"
        d="M8.5 17.616l7.498 4.351v6.028L8.5 17.616zM15.998 4v8.87L8.5 16.22 15.998 4z"
      />
      <path
        fill="#627EEA"
        fillOpacity={0.6}
        d="M8.5 17.616l7.498 4.351v6.028L8.5 17.616zM15.998 4v8.87L8.5 16.22 15.998 4z"
      />
      <path fill="#627EEA" d="M15.998 20.573l7.497-4.353-7.497-3.348z" />
    </svg>
  );
}
