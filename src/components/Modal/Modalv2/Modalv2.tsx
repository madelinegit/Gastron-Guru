import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import withFiltering from './HOC/withFiltering'
import withSorting from './HOC/withSorting'
import ArrowButton from '../../Buttons/ArrowButton'
import { useCardExpansion } from '../../../utils/helpers'
import { ChefDataProps } from '../../ChefCards/types'
import { useSelector } from 'react-redux'
import SortByCard from '../ModalCardComps/SortByCard'
import FilterButtonCard from '../ModalCardComps/FilterButtonCard'
import FilterRadioCard from '../ModalCardComps/FilterRadioCard'

interface ModalProps {
  chefData: ChefDataProps[]
  sortBy: string
  onSortChange: (sortBy: string) => void
  filters: string[]
  onFilterChange: (selectedFilters: string) => void
}

const Modalv2 = ({
  chefData,
  sortBy,
  onSortChange,
  filters,
  onFilterChange,
}: ModalProps) => {
  const filterOptions = ['Discounts', 'Cuisines', 'Tags', 'Rating']
  const modalTabName = ['Sort by:', 'Discounts', 'Cuisines', 'Tags', 'Rating']
  const ratingList = [
    'All',
    'At least 2 stars',
    'At least 3 stars',
    'At least 4 stars',
  ]
  const cuisinesList = Array.from(
    new Set(chefData.flatMap((chef) => chef.cuisines || []))
  )
  const tagsList = Array.from(
    new Set(chefData.flatMap((chef) => chef.private || []))
  )
  const discountsList = Array.from(
    new Set(chefData.flatMap((chef) => chef.labels || []))
  )

  const { expandedCards, toggleCardExpansion } = useCardExpansion(
    modalTabName[0]
  )

  return (
    <section className="outerModalContainer">
      <div className="innerModalContainer">
        <SortByCard
          sortBy={sortBy}
          expandedCards={expandedCards}
          toggleCardExpansion={toggleCardExpansion}
          onSortChange={onSortChange}
        />

        <article className="modalCard">
          <h2>Filter by:</h2>
          {filterOptions.map((option) => (
            <div key={option} className="filterCard">
              <div className="cardHeader">
                <h2>{option}</h2>
                <ArrowButton
                  handleBtnToggle={() => toggleCardExpansion(option)}
                  state={expandedCards.includes(option)}
                />
              </div>
              {expandedCards.includes(option) && (
                <ul>
                  {option === 'Discounts' && (
                    <FilterButtonCard
                      btnArr={discountsList}
                      btnHandle={onFilterChange}
                    />
                  )}
                  {option === 'Cuisines' && (
                    <FilterButtonCard
                      btnArr={cuisinesList}
                      btnHandle={onFilterChange}
                    />
                  )}
                  {option === 'Tags' && (
                    <FilterButtonCard
                      btnArr={tagsList}
                      btnHandle={onFilterChange}
                    />
                  )}
                  {option === 'Rating' && (
                    // ratingList.map((rating) => (
                    //   <li key={rating}>
                    //     <input
                    //       type="radio"
                    //       name="rating"
                    //       value={rating}
                    //       // checked={filters.includes(rating)}
                    //       onChange={() => {}}
                    //     />
                    //     <label htmlFor={rating}>{rating}</label>
                    //   </li>
                    // ))
                    <FilterRadioCard
                      radioArr={ratingList}
                      radioHandle={onFilterChange}
                    />
                  )}
                </ul>
              )}
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}

const ModalWithSorting = withSorting(Modalv2)
const ModalWithSortingAndFiltering = withFiltering(ModalWithSorting)

export default ModalWithSortingAndFiltering
