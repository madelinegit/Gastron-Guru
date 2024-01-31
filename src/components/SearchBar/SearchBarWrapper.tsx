import React from "react";
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
      <div className="search-component">
        <SearchBar />
      </div>
      <div className="mini-searchbar-wrapper">
        <div className="arrow-button-filter">
          <p className="white">Filter</p>
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

        <div className="switch-and-check">
          {/* //creates arrow filterbutton instance */}
          {/* <div className="switchdiv"> */}
          <SwitchInput
            isChecked={
              (isSwitchChecked && !isOverrideActive) || isOverrideActive
            }
            // evaluates as if its one boolean
            onToggle={handleSwitchToggle}
          />
          {/* //creates new instance of switchinput component */}

          {/* </div> */}
          {renderCheckbox && (
            <CheckboxInput
              onCheckboxToggle={handleCheckboxToggle}
              isChecked={detailsShowing}
            />
          )}
          {/* //creates new instance of checkboxinput component */}
          {/* <div className="checkdiv"></div> */}
        </div>
      </div>
    </div>
  );
}
