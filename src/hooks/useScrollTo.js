import { useLayoutEffect } from "react";

export const useScrollTo = id => {
  useLayoutEffect(() => {
    if (id) {
      const el = document.getElementById(id);
      const top = window.scrollY + el.getBoundingClientRect().top;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [id]);
};
