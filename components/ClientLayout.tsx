"use client";
import React from "react";
import { ModalProvider } from "../hooks/ModalProvider";
import { ApplicationModal } from "./ui/ApplicationModal";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      {children}
      <ApplicationModal />
    </ModalProvider>
  );
}
