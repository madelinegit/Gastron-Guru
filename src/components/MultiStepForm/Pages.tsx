import { MultiStepProps } from './index';
import Input from './Input';
import TextArea from './TextArea';
import './MultiStepForm.scss';
import { NavigateFunction } from 'react-router-dom';

type PageProps = {
  onChange: (fields: Partial<MultiStepProps>) => void;
};

type SuccessPageProps = {
  conditionalStyle: React.CSSProperties;
  navigateToDatabase: () => NavigateFunction;
  goToMultiStepForms: React.MouseEventHandler<HTMLButtonElement>;
};

const SuccessPage = ({
  conditionalStyle,
  navigateToDatabase,
  goToMultiStepForms,
}: SuccessPageProps) => {
  return (
    <div style={conditionalStyle}>
      <h3 className="modal-title">You have been successfully registered!</h3>
      <div className="buttons">
        <button className="dark-blue-btn" onClick={navigateToDatabase}>
          Search database
        </button>
        <button className="dark-blue-btn" onClick={goToMultiStepForms}>
          Create user profile
        </button>
        <button className="dark-blue-btn" onClick={goToMultiStepForms}>
          Create chefs profile
        </button>
      </div>
    </div>
  );
};

const PageOne = ({
  state,
  city,
  address,
  zipCode,
  onChange,
}: MultiStepProps & PageProps) => {
  return (
    <div className="page-container">
      <h4 className="title">Where do you operate?</h4>
      <div className="inputs">
        <Input
          label="State"
          type="text"
          className="full-input"
          autoFocus={true}
          value={state}
          handleChange={(e) => onChange({ state: e.target.value })}
        />
        <Input
          label="City"
          type="text"
          className="full-input"
          autoFocus={false}
          value={city}
          handleChange={(e) => onChange({ city: e.target.value })}
        />
        <Input
          label="Address"
          type="text"
          className="input-address"
          autoFocus={false}
          value={address}
          handleChange={(e) => onChange({ address: e.target.value })}
        />
        <Input
          label="Zip Code"
          type="text"
          inputMode="numeric"
          className="input-zip"
          maxLength={5}
          autoFocus={false}
          value={zipCode}
          handleChange={(e) => onChange({ zipCode: e.target.value })}
        />
      </div>
    </div>
  );
};

const PageTwo = ({
  restaurantName,
  restaurantDescription,
  onChange,
}: MultiStepProps & PageProps) => {
  return (
    <div className="page-container">
      <h4 className="title">What do you provide?</h4>
      <div className="inputs">
        <Input
          label="What Name do you want to operate under"
          type="text"
          className="full-input"
          autoFocus={false}
          value={restaurantName}
          handleChange={(e) => onChange({ restaurantName: e.target.value })}
        />
        <TextArea
          label="Service Description"
          className="textarea description-textarea"
          value={restaurantDescription}
          handleChange={(e) =>
            onChange({ restaurantDescription: e.target.value })
          }
        />
      </div>
    </div>
  );
};

const PageThree = () => {
  return (
    <div className="page-three-container">
      <h2 className="title">Hello Page Three</h2>
    </div>
  );
};

export { SuccessPage, PageOne, PageTwo, PageThree };
