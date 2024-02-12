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
