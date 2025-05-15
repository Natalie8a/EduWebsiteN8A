import { Children } from "react";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = ({ children }) => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return children;
};

export default ScrollRestoration;
