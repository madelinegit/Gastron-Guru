import SwitchInput from '../Inputs/SwitchInput'
import CheckboxInput from '../Inputs/CheckboxInput'
import './SearchBarWrapper.scss'
import SearchBar from '.'
import ArrowButton from '../Buttons/ArrowButton'
// import Modal from "../Modal/Modalv1/Modal";
// import ModalCard from "../Modal/Modalv1/ModalCard";
// import { modalData } from "../../utils/Data";
import ModalWithSortingAndFiltering from '../Modal/Modalv3/FilterSortModal'

interface SearchBarWrapperProps {
  isSwitchChecked: boolean
  isOverrideActive: boolean
  handleSwitchToggle: () => void
  renderCheckbox: boolean
  handleCheckboxToggle: () => void
  detailsShowing: boolean
  showModal: boolean
  handleModalToggle: () => void
  // modalData: boolean;
  handleSearch: (query: string) => void
}

export default function SearchBarWrapper({
  isSwitchChecked,
  isOverrideActive,
  handleSwitchToggle,
  renderCheckbox,
  handleCheckboxToggle,
  detailsShowing,
  showModal,
  handleModalToggle,
  handleSearch,
}: SearchBarWrapperProps): JSX.Element {
  // specifies what this code intends to do, create search bar element
  return (
    <div className="search-bar">
      <div className="search-component">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="mini-searchbar-wrapper">
        <div className="arrow-button-filter">
          <p className="white">Filter</p>
          <ArrowButton
            handleBtnToggle={handleModalToggle}
            state={showModal}
            isModalTrigger={true}
          />
          {showModal && <ModalWithSortingAndFiltering />}
        </div>

        <div className="switch-and-check">
          {/* //creates arrow filterbutton instance */}
          <SwitchInput
            isChecked={
              (isSwitchChecked && !isOverrideActive) || isOverrideActive
            }
            onToggle={handleSwitchToggle}
          />
          {/* //creates new instance of switchinput component */}
        </div>
        <div className="checkdiv">
          {renderCheckbox && (
            <CheckboxInput
              onCheckboxToggle={handleCheckboxToggle}
              isChecked={detailsShowing}
            />
          )}
          {/* //creates new instance of checkboxinput component */}
        </div>
      </div>
    </div>
  )
}
