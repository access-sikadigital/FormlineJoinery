import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { useLenis } from "lenis/react";

export function SmoothScroll() {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      setTimeout(() => {
        lenis.resize();
      }, 100);
    }
  }, [location.pathname, lenis]);

  return null;
}


