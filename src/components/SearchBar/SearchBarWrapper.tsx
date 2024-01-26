import SwitchInput from "../Inputs/SwitchInput";
import CheckboxInput from "../Inputs/CheckboxInput";
import "./SearchBarWrapper.scss";
import SearchBar from ".";
import ArrowButton from "../Buttons/ArrowButton";
import MockNarrowContainer from "../Modal/MockNarrowContainer";
import Modal from "../Modal/Modal";
import ModalCard from "../Modal/ModalCard";
import { modalData } from "../../utils/Data";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Map from "../Map/Map";

interface SearchBarWrapperProps {
  isSwitchChecked: boolean;
  isOverrideActive: boolean;
  handleSwitchToggle: () => void;
  renderCheckbox: boolean;
  handleCheckboxToggle: () => void;
  detailsShowing: boolean;
  toggleCardExpansion: (str: string) => void;
  showModal: boolean;
  handleModalToggle: () => void;
  // modalData: boolean;
  expandedCards: string[];
}
//it needs every single one whereever it is called

export default function SearchBarWrapper({
  isSwitchChecked,
  isOverrideActive,
  handleSwitchToggle,
  renderCheckbox,
  handleCheckboxToggle,
  detailsShowing,
  toggleCardExpansion,
  showModal,
  handleModalToggle,
  // modalData,
  expandedCards,
}: SearchBarWrapperProps): JSX.Element {
  // specifies what this code intends to do, create search bar element
  return (
    <div className="search-bar">
      <div className="search-component">{/* <SearchBar /> */}
      {/* Dummy Search Bar */}
        <input type="text" placeholder="Search..." style={{ width: '453px' }}/>
      </div>
      <div className="filter-and-map">
        <div className="arrow-button-filter">
          <span className="white">Filter</span>
          <ArrowButton handleBtnToggle={handleModalToggle} state={showModal} />
          {showModal && (
            <Modal>
              <MockNarrowContainer>
                {" "}
                {modalData.map((card) => (
                  <ModalCard
                    key={card.label}
                    {...card}
                    isExpanded={expandedCards.includes(card.label)}
                    onToggleExpansion={() => toggleCardExpansion(card.label)}
                  />
                ))}
              </MockNarrowContainer>
            </Modal>
          )}
        </div>
        {/* //creates arrow filterbutton instance */}
        <div className="switchdiv">
          <SwitchInput
            isChecked={
              (isSwitchChecked && !isOverrideActive) || isOverrideActive
            }
            // evaluates as if its one boolean
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
  );
}
