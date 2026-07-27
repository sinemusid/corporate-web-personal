'use client';

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-bg-elevated border border-borderToken-subtle text-content-primary rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-borderToken-subtle">
          {title && <h3 className="font-heading font-semibold text-content-primary">{title}</h3>}
          <button
            onClick={onClose}
            className="text-content-secondary hover:text-content-primary transition-colors ml-auto text-xl leading-none"
          >
            &times;
          </button>
        </div>
        <div className="p-6 font-body text-content-primary">{children}</div>
      </div>
    </div>
  );
};
