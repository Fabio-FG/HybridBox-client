import { useEffect } from "react";
import { useLocation } from "react-router-dom";


//function component to auto scroll the page to the top after navigation between pages.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}