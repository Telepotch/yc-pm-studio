'use client';

import React, { useEffect } from 'react';
import { IconSparkle } from '@/components/ui/Icons';
import { useAppStore } from '@/store/app-store';

export default function UpdateBanner() {
  const text = useAppStore((s) => s.updateBannerText);
  const hide = useAppStore((s) => s.hideUpdateBanner);

  useEffect(() => {
    if (text) {
      const timer = setTimeout(hide, 5000);
      return () => clearTimeout(timer);
    }
  }, [text, hide]);

  if (!text) return null;

  return (
    <div className="mx-4 mt-3 mb-1 flex items-center gap-2 px-3 py-2.5 bg-accent-light border border-accent-border rounded-xl text-[12px] text-accent font-semibold animate-slide-down">
      <IconSparkle size={14} className="text-accent shrink-0" />
      {text}
    </div>
  );
}
