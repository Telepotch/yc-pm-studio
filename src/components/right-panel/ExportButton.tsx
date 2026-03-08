'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { IconDownload } from '@/components/ui/Icons';

export default function ExportButton() {
  const [showToast, setShowToast] = useState(false);

  const handleExport = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="relative">
      <Button variant="secondary" onClick={handleExport}>
        <IconDownload size={13} />
        Export PDF
      </Button>
      {showToast && (
        <div className="absolute top-full mt-2 right-0 px-3 py-2 bg-text-0 text-white text-[11px] font-medium rounded-lg shadow-lg whitespace-nowrap animate-fade-in">
          PDF export coming soon
          <div className="absolute -top-1 right-4 w-2 h-2 bg-text-0 rotate-45" />
        </div>
      )}
    </div>
  );
}
