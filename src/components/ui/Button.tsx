'use client';

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-[13px] font-semibold transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer';

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-accent text-white shadow-[0_1px_2px_rgba(0,162,255,0.3)] hover:shadow-[0_2px_8px_rgba(0,162,255,0.25)] hover:brightness-110 active:brightness-95 active:shadow-none',
    secondary:
      'bg-bg-0 border border-border-default text-text-1 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-text-3 hover:shadow-[0_1px_4px_rgba(0,0,0,0.06)] active:bg-bg-1',
    ghost:
      'text-text-2 hover:text-text-1 hover:bg-bg-2 active:bg-bg-3',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
