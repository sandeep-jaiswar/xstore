import type { ReactNode } from "react";

type ClientPortalInterface = {
  children: ReactNode;
  show?: boolean;
  onClose?: () => void;
  selector: string;
};

export type { ClientPortalInterface };
