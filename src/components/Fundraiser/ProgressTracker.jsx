import React from "react";
import { Check } from 'lucide-react';

const ProgressTracker = ({ steps, currentStep }) => {
  return (
    <div className="space-y-4 md:space-y-0 md:min-h-dvh p-4 bg-gray-50">
      {/* Mobile view */}
      <div className="flex items-center justify-between md:hidden sticky">
        {steps.map((step, index) => (
          <div key={step.number} className="relative flex flex-col items-center flex-1">
            {index !== 0 && index !== steps.length - 1 && (
              <div
                className={`absolute left-[-50%] top-[14px] w-[200%] h-[2px] ${
                  step.number <= currentStep ? 'bg-emerald-500' : 'bg-gray-200'
                }`}
              />
            )}
            <div
              className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                step.number === currentStep
                  ? 'border-emerald-500 bg-emerald-500 text-white'
                  : step.number < currentStep
                  ? 'border-emerald-500 bg-[#004146] text-white'
                  : 'border-gray-200 bg-white text-gray-500'
              }`}
            >
              {step.number < currentStep ? <Check className="h-3 w-3" /> : <span className="text-xs">{step.number}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        {steps.map((step, index) => (
          <div key={step.number} className="relative flex-col space-y-6">
            {index !== steps.length - 5  && (
              <div
                className={`absolute left-[18px] -top-[30px] h-full w-[2px] ${
                  step.number < currentStep ? 'bg-emerald-500 ' : 'bg-gray-200 '
                }`}
              />
            )}
            <div className="flex gap-4">
              <div
                className={`relative z-10 flex h-10 w-10 items-center flex-shrink-0 justify-center rounded-full border-2 ${
                  step.number === currentStep
                    ? 'border-emerald-500 bg-emerald-500 text-white'
                    : step.number < currentStep
                    ? 'border-emerald-500 bg-[#004146] text-white'
                    : 'border-gray-200 bg-white text-gray-500'
                }`}
              >
                {step.number < currentStep ? <Check className="h-4 w-4" /> : <span>{step.number}</span>}
              </div>
              <div className="flex flex-col gap-1">
                <h3
                  className={`font-medium ${
                    step.number === currentStep ? 'text-emerald-500' : 'text-gray-900'
                  }`}
                >
                  {step.title}
                </h3>
                 {/* <p className="text-sm text-gray-500">{step.description}</p> */} 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;