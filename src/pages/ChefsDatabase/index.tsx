import React from 'react';
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
import ChefCards from '../../components/ChefCards';
import Modal from '../../components/Modal/Modal';
import ModalCard from '../../components/Modal/ModalCard';
import MockNarrowContainer from '../../components/Modal/MockNarrowContainer';
import useChef from '../../utils/Api';
import ArrowButton from '../../components/Buttons/ArrowButton';
import { modalData } from '../../utils/Data';
import Map from '../../components/Map/Map';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import useChefsDatabaseEffects from './useChefsDatabaseEffects';
import { ChefDataProps } from '../../components/ChefCards/types';
import SearchBarWrapper from '../../components/SearchBar/SearchBarWrapper';

const ChefsDatabase = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { isSwitchChecked, setIsSwitchChecked } = useWindowResize(true);
  const { isOverrideActive, handleSwitchToggle } = useSwitchToggle(
    isSwitchChecked,
    setIsSwitchChecked
  );
  const { renderCheckbox } = useWindowResize(true);
  const { detailsShowing, handleCheckboxToggle } = useCheckboxToggle();

  const [sortedChefCards, setSortChefCards] = useState<ChefDataProps[]>([]);
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

  // sort chef cards by ratings (high to low)
  useChefsDatabaseEffects({ chefData, setSortChefCards });

  return (
    <div
      style={
        loading ? { overflow: 'hidden', position: 'fixed', width: '100vw' } : {}
      }
    >

      <SearchBarWrapper
        handleCheckboxToggle={handleCheckboxToggle}
        handleSwitchToggle={handleSwitchToggle}
        expandedCards={expandedCards}
        isSwitchChecked={isSwitchChecked}
        isOverrideActive={isOverrideActive}
        renderCheckbox={renderCheckbox}
        detailsShowing={detailsShowing}
        showModal={showModal}
        toggleCardExpansion={toggleCardExpansion}
        handleModalToggle={handleModalToggle}
       />

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
