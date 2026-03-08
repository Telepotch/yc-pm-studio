'use client';

import React, { useState } from 'react';
import Modal from '@/components/ui/Modal';
import StepProductUrl from './StepProductUrl';
import StepGoals from './StepGoals';
import StepDataSource from './StepDataSource';
import { useAppStore } from '@/store/app-store';

export default function OnboardingModal() {
  const [step, setStep] = useState(1);
  const [productUrl, setProductUrl] = useState('');
  const [goals, setGoals] = useState<string[]>([]);
  const setOnboardingComplete = useAppStore((s) => s.setOnboardingComplete);

  const handleFinish = (dataSource: string | null) => {
    setOnboardingComplete({
      productUrl,
      goals,
      dataSource,
    });
  };

  return (
    <Modal open maxWidth={step === 3 ? 680 : undefined}>
      {/* Step indicator */}
      <div className="flex items-center gap-1.5 px-8 pt-6">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-1 rounded-full transition-all duration-300 ${
              s <= step ? 'bg-accent flex-[2]' : 'bg-bg-3 flex-1'
            }`}
          />
        ))}
      </div>

      {step === 1 && (
        <StepProductUrl
          value={productUrl}
          onChange={setProductUrl}
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <StepGoals
          value={goals}
          onChange={setGoals}
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <StepDataSource
          goals={goals}
          onSelect={handleFinish}
          onBack={() => setStep(2)}
        />
      )}
    </Modal>
  );
}
