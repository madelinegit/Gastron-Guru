import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import withFiltering from './HOC/withFiltering'
import withSorting from './HOC/withSorting'
import ArrowButton from '../Buttons/ArrowButton'
import { useCardExpansion } from '../../utils/helpers'
import { ChefDataProps } from '../ChefCards/types'
import { useSelector } from 'react-redux'

interface ModalProps {
  chefData: ChefDataProps[]
  sortBy: string
  onSortChange: (sortBy: string) => void
  // filters: any
}

const Modalv2 = ({ chefData, sortBy, onSortChange }: ModalProps) => {
  const dispatch = useDispatch()
  const filters = useSelector((state: any) => state.filters)

  const sortingOptions = ['Rating', 'Number of Reviews', 'Distance from Centre']
  const filterOptions = ['Discounts', 'Cuisines', 'Tags', 'Rating']
  const modalTabName = ['Sort by:', 'Discounts', 'Cuisines', 'Tags']
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
  const handleDiscountFilter = (e: any) => {
    e.preventDefault()
    console.log(filters.discount)
  }

  return (
    <section className="outerModalContainer">
      <div className="innerModalContainer">
        <article className="modalCard">
          <div className="cardHeader">
            <h2>Sort by:</h2>
            <ArrowButton
              handleBtnToggle={() => toggleCardExpansion(modalTabName[0])}
              state={expandedCards.includes(modalTabName[0])}
            />
          </div>
          {expandedCards.includes(modalTabName[0]) && (
            <ul>
              {sortingOptions.map((option) => (
                <li key={option}>
                  <input
                    type="radio"
                    name="sorting"
                    value={option}
                    // defaultChecked={sortBy === option}
                    checked={sortBy === option}
                    onChange={() => onSortChange(option)}
                  />
                  <label htmlFor={option}>{option}</label>
                </li>
              ))}
            </ul>
          )}
        </article>

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
                  {option === 'Discounts' &&
                    discountsList.map((discount) => (
                      <li key={discount}>
                        <button onClick={handleDiscountFilter} value={discount}>
                          {discount}
                        </button>
                      </li>
                    ))}
                  {option === 'Cuisines' &&
                    cuisinesList.map((cuisine) => (
                      <li key={cuisine}>
                        <button onClick={handleDiscountFilter} value={cuisine}>
                          {cuisine}
                        </button>
                      </li>
                    ))}
                  {option === 'Tags' &&
                    tagsList.map((tag) => (
                      <li key={tag}>
                        <button onClick={handleDiscountFilter} value={tag}>
                          {tag}
                        </button>
                      </li>
                    ))}
                  {option === 'Rating' &&
                    ratingList.map((rating) => (
                      <li key={rating}>
                        <input
                          type="radio"
                          name="rating"
                          value={rating}
                          checked={filters.includes(rating)}
                          onChange={handleDiscountFilter}
                        />
                        <label htmlFor={rating}>{rating}</label>
                      </li>
                    ))}
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
