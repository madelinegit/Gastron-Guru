import FormWrapper from "../FormWrapper";
import Input from "../Input";
import "../MultiStepForm.scss";

type AddressProps = {
  state: string;
  city: string;
  address: string;
  zipCode: string;
};

type AddressFormProps = AddressProps & {
  onChange: (fields: Partial<AddressProps>) => void;
};

const AddressPage = ({
  state,
  city,
  address,
  zipCode,
  onChange,
}: AddressFormProps) => {
  return (
    <FormWrapper title="Where do you operate?">
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
    </FormWrapper>
  );
};

export default AddressPage;
