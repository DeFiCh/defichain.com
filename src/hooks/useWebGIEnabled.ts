import { useEffect, useState } from "react";

export default function useWebGlEnabled(): boolean {
  const [isWebGlEnabled, setIsWebGlEnabled] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      setIsWebGlEnabled(
        !!(
          !!window.WebGLRenderingContext &&
          (canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl"))
        )
      );
    } catch (e) {
      setIsWebGlEnabled(false);
    }
  }, []);
  return isWebGlEnabled;
}
