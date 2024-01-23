/*
  TASK: Create a modal for the filter options. Needs to have reusable components and the cards themselves need to be HOC

  1. Understand HOC
  2. Understand the reusable logic

  Create resuable component for the filter modal. Components need resuable logic

  1. Make the modal container
  2. Make a single modal card
  3. Logic for modal container to render the cards

  4. Modal needs to be open / closed on click of the filter arrow -= DONE =-
  5. Default behavior of modal cards needs established
    a. Default: first card is open while others are closed

  6. Modal cards need to be open / closed on click of their specific arrow


*/
import ArrowButton from '../Buttons/ArrowButton'
import './ModalCard.scss'
interface ModalCardProps {
  label: string
  inputs: {
    label: string
    type: string
  }[]
  isExpanded: boolean
  onToggleExpansion: () => void
}
const ModalCard = ({
  label,
  inputs,
  isExpanded,
  onToggleExpansion,
}: ModalCardProps) => {
  return (
    <div className="modalCard">
      <div className="modalCard-header">
        <h2>{label}</h2>
        <ArrowButton handleBtnToggle={onToggleExpansion} state={isExpanded} />
      </div>
      {isExpanded && (
        <ul className="modalCard-List">
          {inputs.map((input) => (
            <li key={input.label}>
              <input type={input.type} />
              <label>{input.label}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default ModalCard
