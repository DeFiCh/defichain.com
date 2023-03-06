import { useEffect, useState } from "react";

export enum ViewPort {
  TABLET = "tablet",
  MOBILE = "mobile",
  DESKTOP = "desktop",
}

export function useDeviceDetect() {
  const [windowDevice, setWindowDevice] = useState<ViewPort | undefined>(
    undefined
  );

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      setWindowDevice(ViewPort.TABLET);
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      setWindowDevice(ViewPort.MOBILE);
    } else {
      setWindowDevice(ViewPort.DESKTOP);
    }
  }, []);

  return windowDevice;
}
