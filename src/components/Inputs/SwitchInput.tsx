import './SwitchInput.scss'
import InputContainer from './InputContainer'

const SwitchInput = ({ label = 'Map' }) => {
  return (
    <InputContainer>
      <p className="switchLabel">{label}</p>
      <label className="switch">
        <input type="checkbox" name="roundSwitch" />
        <span className="SwitchRound"></span>
      </label>
    </InputContainer>
  )
}
export default SwitchInput
