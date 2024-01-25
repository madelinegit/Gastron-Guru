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
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </div>
    </>
  )
}
export default ArrowButton
