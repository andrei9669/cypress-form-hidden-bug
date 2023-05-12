import React, { FormEvent, useCallback, useState } from 'react';
const steps = ['0', '1', '2'];

export const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    setCurrentStep((prev) => prev + 1);
  }, []);

  return (
    <>
      <span>step: {currentStep}</span>
      {steps.map((step) => (
        <form
          key={step}
          hidden={currentStep.toString() !== step}
          onSubmit={handleSubmit}
        >
          <label htmlFor={step}>step: {step}</label>
          <input id={step} name={step.toString()} />
          <button>next {step}</button>
          <button
            type="button"
            onClick={() => setCurrentStep((prev) => prev - 1)}
          >
            back {step}
          </button>
        </form>
      ))}
    </>
  );
};
