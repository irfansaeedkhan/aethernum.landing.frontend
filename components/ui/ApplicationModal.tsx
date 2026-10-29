"use client";

import { useState } from "react";
import { useModal } from "@/hooks/ModalProvider";
import { Modal } from "@/components/ui/Modal";
import { ApplicationForm } from "@/components/ui/ApplicationForm";
import { SuccessModal } from "@/components/ui/SuccessModal";

/**
 * Single home for the invitation dialog.
 *
 * Round 1 fix: HeroContent and FinalCTASection each rendered their own
 * copy of this dialog driven by the same shared ModalProvider state, so
 * opening it mounted the dialog twice in the page structure and the
 * two stacked copies fought over the close control (Escape was the
 * only reliable dismiss). Both sections now only trigger
 * setModalOpen(true); this component, rendered once in ClientLayout,
 * owns the only dialog instance.
 */
export const ApplicationModal = () => {
  const { modalOpen, setModalOpen } = useModal();
  const [successOpen, setSuccessOpen] = useState(false);

  return (
    <>
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
            setModalOpen(false);
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
    </>
  );
};
