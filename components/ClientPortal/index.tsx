import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { ClientPortalInterface } from "./index.types";

const ClientPortal = ({ children, selector = "next__portal", show }: ClientPortalInterface) => {
  const ref = useRef<Element | null>(null);
  useEffect(() => {
    ref.current = document.getElementById(selector);
  }, [selector]);
  return show && ref.current ? createPortal(children, ref.current) : null;
};

export default ClientPortal;