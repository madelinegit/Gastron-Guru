import InputContainer from './InputContainer'
import './CheckboxInput.scss'

interface CheckboxInputProps {
  checkboxDescription?: string
  onCheckboxToggle: () => void
}

const CheckboxInput = ({
  checkboxDescription = 'Details',
  onCheckboxToggle,
}: CheckboxInputProps) => {
  return (
    <InputContainer>
      <input
        type="checkbox"
        name="detail"
        className="checkInput"
        onChange={onCheckboxToggle}
      />
      <label htmlFor="details" className="checkInputLabel">
        {checkboxDescription}
      </label>
    </InputContainer>
  )
}

export default CheckboxInput
