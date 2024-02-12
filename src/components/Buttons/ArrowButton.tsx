import './ArrowButton.scss'

interface ArrowBtnProps {
  handleBtnToggle: () => void
  state: boolean
  isModalTrigger?: boolean
}

const ArrowButton = ({
  handleBtnToggle,
  state,
  isModalTrigger = false,
}: ArrowBtnProps) => {
  return (
    <div>
      <button onClick={handleBtnToggle} className="arrowBtn">
        <i
          className={
            isModalTrigger
              ? state
                ? 'fa-solid fa-chevron-up modalChevronColor'
                : 'fa-solid fa-chevron-down modalChevronColor'
              : state
              ? 'fa-solid fa-chevron-up modalTabChevronColor'
              : 'fa-solid fa-chevron-down modalTabChevronColor'
          }
        ></i>
      </button>
    </div>
  )
}
export default ArrowButton
