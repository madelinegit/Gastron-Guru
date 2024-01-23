import './ArrowButton.scss'

interface ArrowBtnProps {
  handleBtnToggle: () => void
  state: boolean
}

const ArrowButton = ({ handleBtnToggle, state }: ArrowBtnProps) => {
  return (
    <>
      <div>
        <button
          onClick={handleBtnToggle}
          className={state ? 'arrowBtn' : 'arrowBtn-inactive'}
        >
          ^
        </button>
      </div>
    </>
  )
}
export default ArrowButton
