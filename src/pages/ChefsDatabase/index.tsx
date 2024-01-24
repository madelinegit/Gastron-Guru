import { useState, useEffect } from 'react';

import SwitchInput from '../../components/Inputs/SwitchInput'
import CheckboxInput from '../../components/Inputs/CheckboxInput'
import {
  useWindowResize,
  useSwitchToggle,
  useCheckboxToggle,
} from '../../utils/helpers'
import SearchBar from '../../components/SearchBar'
import ChefCards from '../../components/ChefCards'
import useChef from '../../utils/Api'
import Map from '../../components/Map/Map'

const ChefsDatabase = () => {
  const { isSwitchChecked, setIsSwitchChecked } = useWindowResize(true)
  const { isOverrideActive, handleSwitchToggle } = useSwitchToggle(
    isSwitchChecked,
    setIsSwitchChecked
  )
  const { renderCheckbox } = useWindowResize(true)
  const { detailsShowing, handleCheckboxToggle } = useCheckboxToggle()

  const [sortedChefCards, setSortChefCards] = useState<any[]>([]);
  const chefData = useChef()

  const isScrollEnabled = isSwitchChecked || isOverrideActive || detailsShowing;

  // sort chef cards based on ratings (desc order)
  useEffect(() => {
    const sortedData = chefData.sort((a, b) => {
      const ratingA = a.rating?.value || 0;
      const ratingB = b.rating?.value || 0;

      return ratingB - ratingA;
    });
    setSortChefCards(sortedData);
  }, [chefData]);

  return (
    <>
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

      <ChefCards
        chefData={sortedChefCards}
        isScrollEnabled={isScrollEnabled}
      />

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
    </>
  )
}

export default ChefsDatabase
