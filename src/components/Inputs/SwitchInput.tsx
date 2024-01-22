import InputContainer from "./InputContainer";
import "./SwitchInput.scss";

interface SwitchInputProps {
  isChecked: boolean;
  onToggle: () => void;
  label?: string; // Assuming 'label' is a prop used in the component
}

const SwitchInput = ({
  isChecked,
  onToggle,
  label = "Map",
}: SwitchInputProps) => {
  return (
    <InputContainer>
      <p className="switchLabel">{label}</p>
      <label className="switch">
        <input
          type="checkbox"
          name="roundSwitch"
          checked={isChecked}
          onChange={onToggle}
        />
        <span className="SwitchRound"></span>
      </label>
    </InputContainer>
  );
};

export default SwitchInput;
