import Input from '../Input';
import TextArea from '../TextArea';
import '../MultiStepForm.scss';

type AddressProps = {
  state: string;
  city: string;
  address: string;
  zipCode: string;
};

type AddressFormProps = AddressProps & {
  onChange: (fields: Partial<AddressProps>) => void;
};

const PageOne = ({
  state,
  city,
  address,
  zipCode,
  onChange,
}: AddressFormProps) => {
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
          type="number"
          inputMode="numeric"
          className="input-zip"
          autoFocus={false}
          value={zipCode}
          handleChange={(e) => onChange({ zipCode: e.target.value })}
        />
      </div>
    </div>
  );
};

type RestaurantInfoProps = {
  restaurantName: string;
  restaurantDescription: string;
};

type RestaurantInfoFormProps = RestaurantInfoProps & {
  onChange: (fields: Partial<RestaurantInfoProps>) => void;
};

const PageTwo = ({
  restaurantName,
  restaurantDescription,
  onChange,
}: RestaurantInfoFormProps) => {
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

export { PageOne, PageTwo, PageThree };
