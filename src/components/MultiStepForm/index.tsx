import { useState } from 'react';
import './MultiStepForm.scss';
import { PageOne, PageTwo } from './Pages';
import useMultiStepForm from './useMultiStepForm';

export interface MultiStepProps {
  state: string;
  city: string;
  address: string;
  zipCode: string;
  restaurantName: string;
  restaurantDescription: string;
  // cuisines: string[],
  // speciality: string[],
}

export default function MultiStepForm() {
  const [data, setData] = useState<MultiStepProps>({
    state: '',
    city: '',
    address: '',
    zipCode: '',
    restaurantName: '',
    restaurantDescription: '',
  });

  const onChange = (fields: Partial<MultiStepProps>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const {
    currentStep,
    stepContent,
    steps,
    next,
    previous,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([
    <PageOne {...data} onChange={onChange} />,
    <PageTwo {...data} onChange={onChange} />,
  ]);
  // <PageThree {...data} />

  const handleSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!isLastStep) return next();
    console.log(data);
    alert('Successful Account Creation');
    // api post
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="multi-step-form">
        <p className="progress-status">{`Chef's registration ${
          currentStep + 1
        } / ${steps.length}`}</p>
        {stepContent}
        <div className="buttons">
          <button className="dark-blue-btn" onClick={() => previous()}>
            Back
          </button>
          <button className="dark-blue-btn" onClick={() => next()}>
            {isLastStep ? 'Finish' : 'Next'}
          </button>
        </div>
      </form>
    </>
  );
}
