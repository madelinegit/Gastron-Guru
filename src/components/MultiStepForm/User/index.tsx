import useMultiStepForm from '../useMultiStepForm';
import { PageOne, PageThree, PageTwo } from './Pages';
import '../MultiStepForm.scss';

export interface UserMultiStepProps {}

export default function UserMultiStepForm() {
  const {
    currentStep,
    stepContent,
    steps,
    next,
    previous,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([<PageOne />, <PageTwo />, <PageThree />]);

  const handleSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    // api post
  };

  const onClickNext = () => {
    next();
  };

  const onClickBack = () => {
    previous();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="multi-step-form">
        <p className="progress-status">{`User's registration ${currentStep} / ${steps.length}`}</p>
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
