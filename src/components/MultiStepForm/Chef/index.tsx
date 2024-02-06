import { useState } from 'react';
import '../MultiStepForm.scss';
import { PageOne, PageTwo } from './Pages';
import useMultiStepForm from '../useMultiStepForm';

export interface ChefMultiStepProps {
  state: string;
  city: string;
  address: string;
  zipCode: string;
  restaurantName: string;
  restaurantDescription: string;
  // cuisines: string[],
  // speciality: string[],
}

type ChefMultiStepForm = {
  setState: React.Dispatch<React.SetStateAction<string>>;
};

export default function ChefMultiStepForm({ setState }: ChefMultiStepForm) {
  const [data, setData] = useState<ChefMultiStepProps>({
    state: '',
    city: '',
    address: '',
    zipCode: '',
    restaurantName: '',
    restaurantDescription: '',
  });

  const onChange = (fields: Partial<ChefMultiStepProps>) => {
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
    // <PageThree />,
  ]);

  const handleSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    // api post
  };

  const onClickNext = () => {
    const {
      address,
      state,
      city,
      restaurantDescription,
      restaurantName,
      zipCode,
    } = { ...data };

    if (isFirstStep) {
      if (address !== '' && state !== '' && city !== '' && zipCode !== '')
        next();
    }
    if (currentStep === 1) {
      if (restaurantName !== '' && restaurantDescription !== '') next();
    }
    return;
  };

  const onClickBack = () => {
    if (isFirstStep) {
      if (
        confirm(
          'Do you really want to close the form? Your data is going to be lost.'
        )
      )
        setState('');
    }
    previous();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="multi-step-form">
        <p className="progress-status">{`Chef's registration ${currentStep} / ${steps.length}`}</p>
        {stepContent}
        <div className="buttons">
          <button className="dark-blue-btn step-btn" onClick={onClickBack}>
            Back
          </button>
          <button className="dark-blue-btn step-btn" onClick={onClickNext}>
            {isLastStep ? 'Finish' : 'Next'}
          </button>
        </div>
      </form>
    </>
  );
}
