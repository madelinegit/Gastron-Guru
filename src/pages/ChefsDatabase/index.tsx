import { useState, useEffect } from 'react';

import SwitchInput from '../../components/Inputs/SwitchInput';
import CheckboxInput from '../../components/Inputs/CheckboxInput';
import {
  useWindowResize,
  useSwitchToggle,
  useCheckboxToggle,
  useModal,
  useCardExpansion,
} from '../../utils/helpers';
import SearchBar from '../../components/SearchBar';
import ChefCards from '../../components/ChefCards';
import Modal from '../../components/Modal/Modal';
import ModalCard from '../../components/Modal/ModalCard';
import MockNarrowContainer from '../../components/Modal/MockNarrowContainer';
import useChef from '../../utils/Api';
import ArrowButton from '../../components/Buttons/ArrowButton';
import { modalData } from '../../utils/Data';
import Map from '../../components/Map/Map';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { useEffect, useState } from 'react';

const ChefsDatabase = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { isSwitchChecked, setIsSwitchChecked } = useWindowResize(true);
  const { isOverrideActive, handleSwitchToggle } = useSwitchToggle(
    isSwitchChecked,
    setIsSwitchChecked
  );
  const { renderCheckbox } = useWindowResize(true);
  const { detailsShowing, handleCheckboxToggle } = useCheckboxToggle();

  const [sortedChefCards, setSortChefCards] = useState<any[]>([]);
  const chefData = useChef();
  const { showModal, handleModalToggle } = useModal();

  const { expandedCards, toggleCardExpansion } = useCardExpansion(
    modalData[0].label
  );

  const isScrollEnabled = isSwitchChecked || isOverrideActive || detailsShowing;

  useEffect(() => {
    try {
      chefData;
    } catch (error) {
      console.log('An error occurred...');
      setLoading(true);
    }
    return () => {
      console.log('Done!');
      setLoading(false);
    };
  }, [chefData]);

  // sort chef cards based on ratings (desc order) upon initial page load
  useEffect(() => {
    const sortedByRating = chefData.sort((a, b) => {
      const ratingA = a.rating?.value || 0;
      const ratingB = b.rating?.value || 0;

      return ratingB - ratingA;
    });
    setSortChefCards(sortedByRating);
  }, [chefData]);

  return (
    <div
      style={
        loading ? { overflow: 'hidden', position: 'fixed', width: '100vw' } : {}
      }
    >
      <ArrowButton handleBtnToggle={handleModalToggle} state={showModal} />
      {showModal && (
        <Modal>
          <MockNarrowContainer>
            {' '}
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
      <SwitchInput
        isChecked={(isSwitchChecked && !isOverrideActive) || isOverrideActive}
        onToggle={handleSwitchToggle}
      />
      <SearchBar />

      {renderCheckbox && (
        <CheckboxInput
          onCheckboxToggle={handleCheckboxToggle}
          isChecked={detailsShowing}
        />
      )}

      {loading && <LoadingSpinner />}

      <ChefCards chefData={chefData} isScrollEnabled={isScrollEnabled} />

      {isScrollEnabled && (
        <section>
          {(isSwitchChecked || isOverrideActive) && (
            <div>
              <h1>Map</h1>
              <Map />
            </div>
          )}
          {renderCheckbox && detailsShowing && <h1>Details</h1>}
        </section>
      )}
    </div>
  );
};

export default ChefsDatabase;
