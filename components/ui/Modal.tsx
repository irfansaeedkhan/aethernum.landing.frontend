import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

let scrollLockDepth = 0;
let originalBodyOverflow = "";
let originalHtmlOverflow = "";

function lockScroll() {
  if (scrollLockDepth === 0) {
    originalBodyOverflow = document.body.style.overflow;
    originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }
  scrollLockDepth += 1;
}

function unlockScroll() {
  scrollLockDepth = Math.max(0, scrollLockDepth - 1);
  if (scrollLockDepth === 0) {
    document.body.style.overflow = originalBodyOverflow;
    document.documentElement.style.overflow = originalHtmlOverflow;
  }
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  title?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  title,
  ariaLabel = "Modal dialog",
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    lockScroll();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      unlockScroll();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalRoot =
    typeof window !== "undefined" ? document.getElementById("modal-root") || document.body : ({} as HTMLElement);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      aria-label={ariaLabel}
      onClick={onClose}
      style={{ pointerEvents: "auto" }}
    >
      {/* Overlay to block pointer events to background */}
      <div className="absolute inset-0 z-0" style={{ pointerEvents: "all", touchAction: "none" }} />
      <div
        className={cn(
          "relative w-full max-w-[95vw] rounded-3xl bg-[#151C1B] p-8 shadow-lg md:max-w-xl md:p-6 md:px-10",
          "max-h-[90dvh] overflow-y-auto",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          {title && <h2 className="text-lg md:text-xl font-bold text-white">{title}</h2>}
          <button
            className=" text-white/80 hover:text-white focus:outline-none"
            aria-label="Close modal"
            onClick={onClose}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="13.5" stroke="white" strokeOpacity="0.8" />
              <path d="M18 10L10 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M10 10L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
