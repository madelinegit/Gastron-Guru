// import {
//   useSortSelector,
//   useChefDataSelector,
//   useFilterSelector,
// } from '../../../store/Conventional/selectors'
// import { useCardExpansion } from '../../../utils/helpers'
// import ReduxFiltering from './HOC/ReduxFiltering'
// import ReduxSorting from './HOC/ReduxSorting'
// import FilterButtonCard from '../ModalCardComps/FilterButtonCard'
// import FilterRadioCard from '../ModalCardComps/FilterRadioCard'
// import SortByCard from '../ModalCardComps/SortByCard'
// import ArrowButton from '../../Buttons/ArrowButton'
// import { findAllFilters, filterRatingOptions } from '../../../utils/helpers'
// import './FilterSortModal.scss'

// interface ModalV3Props {
//   handleFilterChange: (selectedFilter: string) => void
//   handleSortChange: (selectedSort: string) => void
//   handleRatingFilterChange: (selectedFilter: string) => void
// }

// const FilterSortModal = ({
//   handleFilterChange,
//   handleSortChange,
//   handleRatingFilterChange,
// }: ModalV3Props) => {
//   const filterTabs = ['Discounts', 'Cuisines', 'Tags', 'Rating']
//   const modalTabName = ['Sort by:', 'Discounts', 'Cuisines', 'Tags', 'Rating']
//   const ratingList = filterRatingOptions
//   let selectSortBy: string = useSortSelector()
//   let filtersSelected: string[] = useFilterSelector()
//   const { expandedCards, toggleCardExpansion } = useCardExpansion(
//     modalTabName[0]
//   )

//   const chefData = useChefDataSelector()
//   const filterOptions = chefData ? findAllFilters(chefData) : []

//   return (
//     <section className="outerModalContainer">
//       <span className="ModalUIArrow"></span>
//       <div className="innerModalContainer">
//         <SortByCard
//           sortBy={selectSortBy}
//           expandedCards={expandedCards}
//           toggleCardExpansion={toggleCardExpansion}
//           handleSortChange={handleSortChange}
//         />

//         <article className="modalCard">
//           <h2>Filter by:</h2>
//           {filterTabs.map((option) => (
//             <div key={option} className="modalCard">
//               <div className="modalCard-header">
//                 <h2>{option}</h2>
//                 <ArrowButton
//                   handleBtnToggle={() => toggleCardExpansion(option)}
//                   state={expandedCards.includes(option)}
//                 />
//               </div>
//               {expandedCards.includes(option) && (
//                 <ul className="modalCard-List">
//                   {option === 'Discounts' && (
//                     <FilterButtonCard
//                       btnArr={filterOptions.discountsList || []}
//                       isBtnActive={filtersSelected}
//                       btnHandle={handleFilterChange}
//                     />
//                   )}
//                   {option === 'Cuisines' && (
//                     <FilterButtonCard
//                       btnArr={filterOptions.cuisinesList || []}
//                       isBtnActive={filtersSelected}
//                       btnHandle={handleFilterChange}
//                     />
//                   )}
//                   {option === 'Tags' && (
//                     <FilterButtonCard
//                       btnArr={filterOptions.tagsList || []}
//                       isBtnActive={filtersSelected}
//                       btnHandle={handleFilterChange}
//                     />
//                   )}
//                   {option === 'Rating' && (
//                     <FilterRadioCard
//                       radioArr={ratingList}
//                       radioHandle={handleRatingFilterChange}
//                     />
//                   )}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </article>
//       </div>
//     </section>
//   )
// }

// const ModalWithSorting = ReduxSorting(FilterSortModal)
// const ModalWithSortingAndFiltering = ReduxFiltering(ModalWithSorting)

// export default ModalWithSortingAndFiltering
import React, { Suspense } from 'react'
import {
  useSortSelector,
  useChefDataSelector,
  useFilterSelector,
} from '../../../store/Conventional/selectors'
import { useCardExpansion } from '../../../utils/helpers'
import ReduxFiltering from './HOC/ReduxFiltering'
import ReduxSorting from './HOC/ReduxSorting'
import ArrowButton from '../../Buttons/ArrowButton'
import { findAllFilters, filterRatingOptions } from '../../../utils/helpers'
import './FilterSortModal.scss'

// Lazy load components
const SortByCard = React.lazy(() => import('../ModalCardComps/SortByCard'))
const FilterButtonCard = React.lazy(
  () => import('../ModalCardComps/FilterButtonCard')
)
const FilterRadioCard = React.lazy(
  () => import('../ModalCardComps/FilterRadioCard')
)
interface ModalMemoProps {
  handleFilterChange: (selectedFilter: string) => void
  handleSortChange: (selectedSort: string) => void
  handleRatingFilterChange: (selectedFilter: string) => void
}

const ModalV3 = React.memo(
  ({
    handleFilterChange,
    handleSortChange,
    handleRatingFilterChange,
  }: ModalMemoProps) => {
    const filterTabs = ['Discounts', 'Cuisines', 'Tags', 'Rating']
    const modalTabName = ['Sort by:', ...filterTabs]
    const ratingList = filterRatingOptions
    const selectSortBy = useSortSelector()
    const filtersSelected = useFilterSelector()
    const { expandedCards, toggleCardExpansion } = useCardExpansion(
      modalTabName[0]
    )
    const chefData = useChefDataSelector()
    const filterOptions = chefData ? findAllFilters(chefData) : []

    return (
      <section className="outerModalContainer">
        <span className="ModalUIArrow"></span>
        <div className="innerModalContainer">
          <Suspense fallback={<div>Loading...</div>}>
            <SortByCard
              sortBy={selectSortBy}
              expandedCards={expandedCards}
              toggleCardExpansion={toggleCardExpansion}
              handleSortChange={handleSortChange}
            />
          </Suspense>
          <article className="modalCard">
            <h2>Filter by:</h2>
            {filterTabs.map((option) => (
              <div key={option} className="modalCard">
                <div className="modalCard-header">
                  <h2>{option}</h2>
                  <ArrowButton
                    handleBtnToggle={() => toggleCardExpansion(option)}
                    state={expandedCards.includes(option)}
                  />
                </div>
                {expandedCards.includes(option) && (
                  <ul className="modalCard-List">
                    <Suspense fallback={<div>Loading...</div>}>
                      {option === 'Discounts' && (
                        <FilterButtonCard
                          btnArr={filterOptions.discountsList || []}
                          isBtnActive={filtersSelected}
                          btnHandle={handleFilterChange}
                        />
                      )}
                      {option === 'Cuisines' && (
                        <FilterButtonCard
                          btnArr={filterOptions.cuisinesList || []}
                          isBtnActive={filtersSelected}
                          btnHandle={handleFilterChange}
                        />
                      )}
                      {option === 'Tags' && (
                        <FilterButtonCard
                          btnArr={filterOptions.tagsList || []}
                          isBtnActive={filtersSelected}
                          btnHandle={handleFilterChange}
                        />
                      )}
                      {option === 'Rating' && (
                        <FilterRadioCard
                          radioArr={ratingList}
                          radioHandle={handleRatingFilterChange}
                        />
                      )}
                    </Suspense>
                  </ul>
                )}
              </div>
            ))}
          </article>
        </div>
      </section>
    )
  }
)

const ModalWithSorting = ReduxSorting(ModalV3)
const ModalWithSortingAndFiltering = ReduxFiltering(ModalWithSorting)

export default ModalWithSortingAndFiltering
