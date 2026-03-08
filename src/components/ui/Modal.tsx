'use client';

import React from 'react';

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  maxWidth?: number;
}

export default function Modal({ open, children, maxWidth }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-text-0/10 backdrop-blur-md" />
      <div
        className="relative bg-bg-0 rounded-2xl border border-border-default shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.06)] w-full mx-4 animate-scale-in overflow-hidden"
        style={{
          maxWidth: maxWidth || 448,
          transition: 'max-width 0.3s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  );
}
