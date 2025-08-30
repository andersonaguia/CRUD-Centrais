import { ReactNode } from "react";

export interface ModalContextType {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}
