"use client";

import { useModal } from "@/hooks/ModalProvider";
import { Modal } from "@/components/ui/Modal";
import { useState } from "react";
import { ApplicationForm } from "../ui/ApplicationForm";
import { SuccessModal } from "../ui/SuccessModal";

const FinalCTASection = () => {
  const { modalOpen, setModalOpen } = useModal();
  const [successOpen, setSuccessOpen] = useState(false);

  return (
    <section className="py-20 bg-brand-charcoal text-center relative w-full aspect-[1438/664] bg-[url('/images/invitation.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl tablet:text-4xl laptop:text-5xl font-bold  font-heading text-white mb-6 laptop:mb-16 tablet:max-w-[15ch] mx-auto laptop:max-w-[70ch]">
          If you&apos;re reading this, <br />
          you might already be ready.
        </h2>
        <button
          className="group rounded-full bg-gradient-gold maxmobile:px-8 tablet:px-20 laptop:px-10 py-4 text-base font-bold text-brand-white hover:opacity-90 laptop:text-lg"
          onClick={() => setModalOpen(true)}
        >
          REQUEST AN INVITATION
        </button>
        <p className="text-body text-white max-w-md mx-auto mt-10">
          Only a few will be selected. <br /> No follow-ups. No marketing.
        </p>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        ariaLabel="Apply to Access the Protocol"
        title="Apply to Access the Protocol"
      >
        <p className="text-white text-sm mb-6">
          This protocol is accessible by invitation only.
          <br />
          Please complete the form below - every request is carefully reviewed.
        </p>
        <ApplicationForm
          onSuccess={() => {
            setSuccessOpen(true);
          }}
        />
      </Modal>
      <Modal
        title="Applied to Access the Protocol"
        isOpen={successOpen}
        onClose={() => {
          setModalOpen(false);
          setSuccessOpen(false);
        }}
        ariaLabel="Success"
      >
        <SuccessModal
          onClose={() => {
            setModalOpen(false);
            setSuccessOpen(false);
          }}
        />
      </Modal>
      <div className="block laptop:hidden absolute top-0 left-0 w-full h-[28.9px] bg-repeat-x bg-[url('/images/tile-pattern.png')] bg-contain bg-center"></div>
    </section>
  );
};

export default FinalCTASection;
