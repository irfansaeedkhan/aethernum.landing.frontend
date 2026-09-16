"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { ApplicationForm } from "@/components/ui/ApplicationForm";
import { SuccessModal } from "@/components/ui/SuccessModal";
import { useModal } from "../../hooks/ModalProvider";

const HeroContent = () => {
  const { modalOpen, setModalOpen } = useModal();
  const [successOpen, setSuccessOpen] = useState(false);

  return (
    <>
      <div className="container absolute left-1/2 z-10 mx-auto -translate-x-1/2 px-6 text-center maxmobile:top-[34%] tablet:bottom-[32%] laptop:bottom-[18%]">
        <h1 className="mx-auto font-heading text-3xl text-white tablet:text-[2.5rem] laptop:text-5xl xl:text-6xl">
          Don&apos;t seek Aethernum <br />
          Let Aethernum find you.
        </h1>

        <div className="mx-auto my-5 h-[3px] w-[189px] rounded-full bg-[#FFAA21] laptop:h-[5px]"></div>
        <p className="text-body mx-auto mb-12 max-w-[28rem] laptop:max-w-[38rem] laptop:text-xl leading-relaxed text-white">
          A private club where value grows in silence, wealth matures over time, and true intelligence has no face.
        </p>
        <button
          className="group rounded-full bg-gradient-gold maxmobile:px-8 tablet:px-20 laptop:px-10 py-4 text-base font-bold text-brand-white hover:opacity-90 laptop:text-lg"
          onClick={() => setModalOpen(true)}
        >
          REQUEST AN INVITATION
        </button>

        <p className="text-body mt-4 text-gray">If you&apos;re ready, we&apos;ll find you.</p>
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
    </>
  );
};

export default HeroContent;
