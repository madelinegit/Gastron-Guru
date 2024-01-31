import InputContainer from "./InputContainer";
import "./SwitchInput.scss";

interface SwitchInputProps {
  isChecked: boolean;
  onToggle: () => void;
  //function w no inputs, returns nothing
  label?: string; // Assuming 'label' is a prop used in the component
}

const SwitchInput = ({
  isChecked,
  onToggle,
  label = "Map",
}: SwitchInputProps) => {
  return (
    <InputContainer>
      <span className="switchLabel">{label}</span>
      <label className="switch">
        <input
          type="checkbox"
          name="roundSwitch"
          checked={isChecked}
          onChange={onToggle}
          //execute onToggle function
        />
        <span className="SwitchRound"></span>
      </label>
    </InputContainer>
  );
};

export default SwitchInput;
