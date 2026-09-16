"use client";
import React from "react";
import { ModalProvider } from "../hooks/ModalProvider";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>;
}
