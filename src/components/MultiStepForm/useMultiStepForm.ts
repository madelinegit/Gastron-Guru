import { ReactElement, useState } from 'react';

const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState(0);

  function next() {
    setCurrentStep((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function previous() {
    setCurrentStep((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  return {
    currentStep,
    steps,
    stepContent: steps[currentStep],
    next,
    previous,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
  };
};

export default useMultiStepForm;
