import { useState } from "react";
import useMultiStepForm from "../useMultiStepForm";
import AddressPage from "./AddressPage";
import RestaurantInfoPage from "./RestaurantInfoPage";
import SpecialityAndCuisinesPage from "./SpecialityAndCuisinesPage";
import "../MultiStepForm.scss";

export interface ChefMultiStepProps {
  state: string;
  city: string;
  address: string;
  zipCode: string;
  restaurantName: string;
  restaurantDescription: string;
  cuisines: string[];
  speciality: string[];
}

type ChefMultiStepForm = {
  setState: React.Dispatch<React.SetStateAction<string>>;
};

export default function ChefMultiStepForm({ setState }: ChefMultiStepForm) {
  const [data, setData] = useState<ChefMultiStepProps>({
    state: "",
    city: "",
    address: "",
    zipCode: "",
    restaurantName: "",
    restaurantDescription: "",
    cuisines: [],
    speciality: [],
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
    <AddressPage {...data} onChange={onChange} />,
    <RestaurantInfoPage {...data} onChange={onChange} />,
    <SpecialityAndCuisinesPage {...data} onChange={onChange} />,
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
      cuisines,
    } = { ...data };

    if (isFirstStep) {
      if (address !== "" && state !== "" && city !== "" && zipCode !== "")
        next();
    }
    if (currentStep === 1) {
      if (restaurantName !== "" && restaurantDescription !== "") next();
    }
    if (isLastStep) {
      if (cuisines.length > 0) next();
      // if (specialities.length > 0) next();
      /* submit the form */
    }
    return;
  };

  const onClickBack = () => {
    if (isFirstStep) {
      if (
        confirm(
          "Do you really want to close the form? Your data is going to be lost."
        )
      )
        setState("");
    }
    previous();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="multi-step-form">
        <p className="progress-status">{`Chef's registration ${
          currentStep + 1
        } / ${steps.length}`}</p>
        {stepContent}
        <div className="multi-step-form-buttons">
          <button className="dark-blue-btn step-btn" onClick={onClickBack}>
            Back
          </button>
          <button className="dark-blue-btn step-btn" onClick={onClickNext}>
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </>
  );
}
