import FormWrapper from "../FormWrapper";
import Input, { InputProps } from "../Input";
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
  const inputsData: InputProps[] = [
    {
      label: "State",
      type: "text",
      id: "state",
      className: "full-input",
      autoFocus: true,
      value: state,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        onChange({ state: e.target.value }),
    },
    {
      label: "City",
      type: "text",
      id: "city",
      className: "full-input",
      autoFocus: false,
      value: city,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        onChange({ city: e.target.value }),
    },
    {
      label: "Address",
      type: "text",
      id: "address",
      className: "input-address",
      autoFocus: false,
      value: address,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        onChange({ address: e.target.value }),
    },
    {
      label: "Zip Code",
      type: "number",
      id: "zip_code",
      className: "input-zip",
      autoFocus: false,
      value: zipCode,
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        onChange({ zipCode: e.target.value.toString() }),
    },
  ];

  return (
    <FormWrapper title="Where do you operate?">
      {inputsData.map((input) => {
        return (
          <Input
            key={input.id}
            label={input.label}
            type={input.type}
            id={input.id}
            className={input.className}
            autoFocus={input.autoFocus}
            value={input.value}
            handleChange={input.handleChange}
          />
        );
      })}
    </FormWrapper>
  );
};

export default AddressPage;
