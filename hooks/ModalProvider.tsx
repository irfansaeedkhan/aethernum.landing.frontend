'use client';

import React, { createContext, useContext, useState } from "react";

type ModalContextType = {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

const ModalContext = createContext<ModalContextType>({
  modalOpen: false,
  setModalOpen: () => {}, 
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
