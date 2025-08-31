"use client";

import React, { useRef, useEffect, FC, ReactNode } from "react";
import * as s from "./styles/modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={s.backdrop}>
      <div className={s.modal} ref={modalRef}>
        <div className={s.closeButtonContainer}>
          <button onClick={onClose} className={s.closeButton}>
            &times;
          </button>
        </div>
        <div className={s.modalContent}>{children}</div>
      </div>
    </div>
  );
};
