import { useState } from 'react';
import './MultiStepForm.scss';
import { PageOne, PageTwo, SuccessPage } from './Pages';
import useMultiStepForm from './useMultiStepForm';

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

export default function ChefMultiStepForm() {
  // const [accountType, setAccountType] = useState<'' | 'chef' | 'user'>('');
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
    // <SuccessPage
    //   conditionalStyle={
    //     accountType === 'chef' || accountType === 'user'
    //       ? { display: 'none' }
    //       : {}
    //   }
    //   goToUserProfileForm={() => setAccountType('user')}
    //   goToChefProfileForm={() => setAccountType('chef')}
    // />,
    <PageOne {...data} onChange={onChange} />,
    <PageTwo {...data} onChange={onChange} />,
    // <PageThree {...data} />
  ]);

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

  const onClickNext = () => {
    console.log(data);
    next();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="multi-step-form">
        <p className="progress-status">{`Chef's registration ${currentStep} / ${steps.length}`}</p>
        {stepContent}
        <div className="buttons">
          <button className="dark-blue-btn step-btn" onClick={previous}>
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
