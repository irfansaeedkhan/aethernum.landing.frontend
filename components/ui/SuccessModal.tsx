import React from "react";
import { CustomButton } from "./custom-button";
import { Button } from "./button";
import Image from "next/image";

interface SuccessModalProps {
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full">
      <div className="mb-6 mt-2">
        <Image src="/images/checkmark.svg" alt="check" width={85} height={54} />
      </div>
      <p className="text-white text-sm mb-2 text-left w-full">
        Thank you. Your request has been received.
        <br />
        If approved, you&apos;ll receive an access key via your preferred
        channel.
      </p>

      <button
        className="rounded-full bg-gradient-gold hover:opacity-90 text-brand-white font-semibold px-6 w-full mt-8 text-base py-3 uppercase"
        onClick={onClose}
      >
        DONE
      </button>
    </div>
  );
};
