import InputContainer from "./InputContainer";
import "./CheckboxInput.scss";

interface CheckboxInputProps {
  checkboxDescription?: string;
  onCheckboxToggle: () => void;
  isChecked: boolean;
}

const CheckboxInput = ({
  checkboxDescription = "Details",
  onCheckboxToggle,
  isChecked,
}: CheckboxInputProps) => {
  return (
    <InputContainer>
      <input
        type="checkbox"
        name="detail"
        className="checkInput"
        checked={isChecked}
        defaultChecked={true}
        onChange={onCheckboxToggle}
      />
      <label htmlFor="details" className="checkInputLabel">
        {checkboxDescription}
      </label>
    </InputContainer>
  );
};

export default CheckboxInput;
