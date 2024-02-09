// import { useEffect, useState } from 'react';
// import ArrowButton from '../../components/Buttons/ArrowButton';
// import ChefCards from '../../components/ChefCards';
// import { ChefDataProps } from '../../components/ChefCards/types';
// import ChefDetail from '../../components/ChefDetail/ChefDetail';
// import SwitchInput from '../../components/Inputs/SwitchInput';
// import { LoadingSpinner } from '../../components/LoadingSpinner';
// import Map from '../../components/Map/Map';

// import useChef from '../../utils/Api';
// import { modalData } from '../../utils/Data';
// import {
//   useCardExpansion,
//   useCheckboxToggle,
//   useModal,
//   useSwitchToggle,
//   useWindowResize,
// } from '../../utils/helpers';
// import useChefsDatabaseEffects from './useChefsDatabaseEffects';
// import '../../components/LoadingSpinner/LoadingSpinner.scss';
// import useSearchChefs from '../../utils/useSeachChefs';
// import ModalWithSortingAndFiltering from '../../components/Modal/Modalv3/Modalv3'
// import {
//   useChefDataSelector,
//   useFilterSelector,
//   useSortSelector,
// } from '../../store/Conventional/selectors'
// import { loadChefs } from '../../store/Conventional/thunk'
// import { useDispatch } from 'react-redux'
// import { setFilter } from '../../store/Conventional/actionCreator'

// const ChefsDatabase = () => {
//     const dispatch = useDispatch()
//   const [loading, setLoading] = useState<boolean>(true);
//   const { isSwitchChecked, setIsSwitchChecked } = useWindowResize(true);
//   const { isOverrideActive, handleSwitchToggle } = useSwitchToggle(
//     isSwitchChecked,
//     setIsSwitchChecked
//   )
//   const { renderCheckbox } = useWindowResize(true)
//   const { detailsShowing, handleCheckboxToggle } = useCheckboxToggle()

//   const getChefDataFilterSort = () => {
//     let rawChefData = useChefDataSelector()
//     if (!rawChefData) {
//       dispatch(loadChefs())
//       rawChefData = useChefDataSelector()
//     }
//     const filters = useFilterSelector()
//     const sort = useSortSelector()
//     let filteredData

//     if (
//       (filters.length === 1 && filters[0] === 'All') ||
//       filters.length === 0
//     ) {
//       filteredData = rawChefData
//       // dispatch(setFilter('All'))
//     } else {
//       filteredData = rawChefData?.filter((chef) => {
//         return filters.some((filter) => {
//           // Check if any of the filters match cuisines, private, or labels
//           return (
//             chef.cuisines.includes(filter) ||
//             chef.private.includes(filter) ||
//             chef.labels.includes(filter)
//           )
//         })
//       })
//       console.log({ filteredData })
//     }

//     if (!filteredData) {
//       filteredData = rawChefData
//     }
//     let sortedData = filteredData // remove once switch for sorting is working
//     // switch (sort) {
//     //   case 'Distance from centre':
//     //     sortedData = filteredData?.sort((a, b) => a.distance - b.distance)
//     //     break
//     //   case 'Discount':
//     //     sortedData = filteredData?.sort((a, b) => b.discount - a.discount)
//     //     break
//     //   default:
//     //     sortedData = filteredData?.sort((a, b) => b.rating - a.rating)
//     // }

//     return sortedData
//   }

//   const { showModal, handleModalToggle } = useModal()

//   const isScrollEnabled = isSwitchChecked || isOverrideActive || detailsShowing
//   const chefData = getChefDataFilterSort()

//   //change back to true before push
//   const [loading, setLoading] = useState<boolean>(false)
//   );
//   const { renderCheckbox } = useWindowResize(true);
//   const { detailsShowing, handleCheckboxToggle } = useCheckboxToggle();

//   const [sortedChefCards, setSortChefCards] = useState<ChefDataProps[]>([]);
//   const chefData = useChef();
//   const { showModal, handleModalToggle } = useModal();

//   const { expandedCards, toggleCardExpansion } = useCardExpansion(
//     modalData[0].label
//   );
//   const isScrollEnabled = isSwitchChecked || isOverrideActive || detailsShowing;
//   const { searchResults, handleSearch } = useSearchChefs(chefData);
//   const [activeCard, setActiveCard] = useState<number>(0);

//   const onCardClick = (index: number) => {
//     setActiveCard(index);
//   };

//   useEffect(() => {
//     try {
//       chefData
//     } catch (error) {
//       console.log('An error occurred...')
//       setLoading(true)
//     }
//     return () => {
//       console.log('Done!');
//       setLoading(false);
//     };
//   }, [chefData]);

//   // sort chef cards by ratings (high to low)
//   useChefsDatabaseEffects({ chefData, setSortChefCards });

//   return (
//     <div className={`${loading && 'spinner-wrapper'}`}>
//       <ArrowButton handleBtnToggle={handleModalToggle} state={showModal} />
//       {showModal && <ModalWithSortingAndFiltering chefData={chefData} />}
//       <SwitchInput
//         isChecked={(isSwitchChecked && !isOverrideActive) || isOverrideActive}
//         onToggle={handleSwitchToggle}
//       />

//       <SearchBarWrapper
//         handleCheckboxToggle={handleCheckboxToggle}
//         handleSwitchToggle={handleSwitchToggle}
//         expandedCards={expandedCards}
//         isSwitchChecked={isSwitchChecked}
//         isOverrideActive={isOverrideActive}
//         renderCheckbox={renderCheckbox}
//         detailsShowing={detailsShowing}
//         showModal={showModal}
//         toggleCardExpansion={toggleCardExpansion}
//         handleModalToggle={handleModalToggle}
//         handleSearch={handleSearch}
//       />
//       {loading && <LoadingSpinner />}

//        {searchResults.length === 0 ? (
//         <ChefCards
//         chefData={chefData}
//         isScrollEnabled={isScrollEnabled}
//         onCardClick={onCardClick}
//         activeCard={activeCard}
//       />
//       ) : (
//         <ChefCards
//         chefData={searchResults}
//         isScrollEnabled={isScrollEnabled}
//         onCardClick={onCardClick}
//         activeCard={activeCard}
//       />
//       )}
//       <ChefDetail activeCard={activeCard} />

//       {isScrollEnabled && (
//         <section>
//           {(isSwitchChecked || isOverrideActive) && (
//             <div>
//               <h1>Map</h1>
//               {/* <Map /> */}
//             </div>
//           )}
//           {renderCheckbox && detailsShowing && <h1>Details</h1>}
//         </section>
//       )}
//     </div>
//   )
// }

// export default ChefsDatabase
import { useEffect, useState } from 'react'
import ArrowButton from '../../components/Buttons/ArrowButton'
import ChefCards from '../../components/ChefCards'
import { ChefDataProps } from '../../components/ChefCards/types'
import ChefDetail from '../../components/ChefDetail/ChefDetail'
import SwitchInput from '../../components/Inputs/SwitchInput'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import Map from '../../components/Map/Map'
// import MockNarrowContainer from '../../components/Modal/MockNarrowContainer';
// import Modal from '../../components/Modal/Modal';
// import ModalCard from '../../components/Modal/ModalCard';
//import SearchBar from '../../components/SearchBar';
import SearchBarWrapper from '../../components/SearchBar/SearchBarWrapper'
import useChef from '../../utils/Api'
import { modalData } from '../../utils/Data'
import {
  useCardExpansion,
  useCheckboxToggle,
  useModal,
  useSwitchToggle,
  useWindowResize,
} from '../../utils/helpers'
import useChefsDatabaseEffects from './useChefsDatabaseEffects'
import '../../components/LoadingSpinner/LoadingSpinner.scss'
import useSearchChefs from '../../utils/useSeachChefs'

const ChefsDatabase = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const { isSwitchChecked, setIsSwitchChecked } = useWindowResize(true)
  const { isOverrideActive, handleSwitchToggle } = useSwitchToggle(
    isSwitchChecked,
    setIsSwitchChecked
  )
  const { renderCheckbox } = useWindowResize(true)
  const { detailsShowing, handleCheckboxToggle } = useCheckboxToggle()

  const [sortedChefCards, setSortChefCards] = useState<ChefDataProps[]>([])
  const chefData = useChef()
  const { showModal, handleModalToggle } = useModal()

  const { expandedCards, toggleCardExpansion } = useCardExpansion(
    modalData[0].label
  )
  const isScrollEnabled = isSwitchChecked || isOverrideActive || detailsShowing
  const { searchResults, handleSearch } = useSearchChefs(chefData)
  const [activeCard, setActiveCard] = useState<number>(0)

  const onCardClick = (index: number) => {
    setActiveCard(index)
  }

  useEffect(() => {
    try {
      chefData
    } catch (error) {
      console.log('An error occurred...')
      setLoading(true)
    }
    return () => {
      console.log('Done!')
      setLoading(false)
    }
  }, [chefData])

  // sort chef cards by ratings (high to low)
  useChefsDatabaseEffects({ chefData, setSortChefCards })

  return (
    <div className={`${loading && 'spinner-wrapper'}`}>
      {/* <ArrowButton handleBtnToggle={handleModalToggle} state={showModal} />
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
      /> */}

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
        handleSearch={handleSearch}
      />
      {loading && <LoadingSpinner />}

      {searchResults.length === 0 ? (
        <ChefCards
          chefData={chefData}
          isScrollEnabled={isScrollEnabled}
          onCardClick={onCardClick}
          activeCard={activeCard}
        />
      ) : (
        <ChefCards
          chefData={searchResults}
          isScrollEnabled={isScrollEnabled}
          onCardClick={onCardClick}
          activeCard={activeCard}
        />
      )}
      <ChefDetail activeCard={activeCard} />

      {isScrollEnabled && (
        <section>
          {(isSwitchChecked || isOverrideActive) && (
            <div>
              <h1>Map</h1>
              {/* <Map /> */}
            </div>
          )}
          {renderCheckbox && detailsShowing && <h1>Details</h1>}
        </section>
      )}
    </div>
  )
}

export default ChefsDatabase
