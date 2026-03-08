'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { IconArrowLeft, IconDrive, IconHash, IconUpload, IconSkipForward } from '@/components/ui/Icons';

interface StepDataSourceProps {
  onSelect: (source: string | null) => void;
  onBack: () => void;
}

const dataSources = [
  { id: 'google-drive', label: 'Google Drive', Icon: IconDrive },
  { id: 'slack', label: 'Slack', Icon: IconHash },
  { id: 'csv', label: 'Upload CSV', Icon: IconUpload },
];

export default function StepDataSource({ onSelect, onBack }: StepDataSourceProps) {
  return (
    <div className="px-8 pb-8 pt-6">
      <div className="text-[11px] text-text-3 font-semibold uppercase tracking-wider mb-1">Step 3 of 3</div>
      <h2 className="text-[18px] font-display italic text-text-0 mb-1">
        Connect your first data source
      </h2>
      <p className="text-[12px] text-text-2 mb-5">
        Agents will request more sources as they identify data gaps.
      </p>

      <div className="grid grid-cols-2 gap-2.5">
        {dataSources.map((ds) => (
          <button
            key={ds.id}
            onClick={() => onSelect(ds.id)}
            className="flex items-center gap-3 p-3.5 bg-bg-0 border border-border-default rounded-xl hover:border-accent-border hover:bg-accent-light hover:shadow-[0_0_0_3px_rgba(0,162,255,0.06)] transition-all duration-200 text-left group cursor-pointer"
          >
            <span className="w-9 h-9 rounded-lg bg-bg-2 border border-border-light flex items-center justify-center text-text-2 group-hover:text-accent group-hover:bg-accent-light group-hover:border-accent-border transition-all">
              <ds.Icon size={18} />
            </span>
            <span className="text-[13px] font-semibold text-text-1 group-hover:text-text-0">{ds.label}</span>
          </button>
        ))}
        <button
          onClick={() => onSelect(null)}
          className="flex items-center gap-3 p-3.5 bg-bg-0 border border-border-light rounded-xl hover:bg-bg-1 transition-all duration-200 text-left cursor-pointer"
        >
          <span className="w-9 h-9 rounded-lg bg-bg-2 flex items-center justify-center text-text-3">
            <IconSkipForward size={18} />
          </span>
          <span className="text-[13px] text-text-2">Skip for now</span>
        </button>
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="ghost" onClick={onBack}>
          <IconArrowLeft size={14} />
          Back
        </Button>
      </div>
    </div>
  );
}
