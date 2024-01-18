import './CheckboxInput.scss'
import InputContainer from './InputContainer'

//default checkbox description is 'Details'
const CheckboxInput = ({ checkboxDescription = 'Details' }) => {
  return (
    <InputContainer>
      <input type="checkbox" name="detail" className="checkInput" />
      <label htmlFor="details" className="checkInputLabel">
        {checkboxDescription}
      </label>
    </InputContainer>
  )
}

export default CheckboxInput
