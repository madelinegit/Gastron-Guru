import { useState, useEffect } from 'react'
import { loadChefs } from '../store/Conventional/thunk'
import { ChefDataProps } from '../components/ChefCards/types'
import {
  useChefDataSelector,
  useFilterRatingSelector,
  useFilterSelector,
  useSortSelector,
} from '../store/Conventional/selectors'
import { filterRatings, changeSort } from '../store/Conventional/actionCreator'

export const useWindowResize = (defaultState: boolean) => {
  const [state, setState] = useState<boolean>(defaultState)

  useEffect(() => {
    const handleWindowSizeChange = () => {
      const windowWidth = window.innerWidth
      setState(windowWidth > 600)
    }

    handleWindowSizeChange()
    window.addEventListener('resize', handleWindowSizeChange)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return {
    isSwitchChecked: state,
    setIsSwitchChecked: setState,
    renderCheckbox: state,
    state,
  }
}

export const useSwitchToggle = (
  isSwitchChecked: boolean,
  setIsSwitchChecked: any
) => {
  const [isOverrideActive, setIsOverrideActive] = useState<boolean>(false)

  const handleSwitchToggle = () => {
    if (isSwitchChecked && !isOverrideActive) {
      setIsSwitchChecked((prev: boolean) => !prev)
    } else if (!isSwitchChecked && !isOverrideActive) {
      setIsOverrideActive((prev) => !prev)
    } else {
      setIsOverrideActive((prev) => !prev)
    }
  }

  return { isOverrideActive, handleSwitchToggle }
}

export const useCheckboxToggle = () => {
  const [detailsShowing, setDetailsShowing] = useState<boolean>(true)

  const handleCheckboxToggle = () => {
    setDetailsShowing((prev) => !prev)
  }

  return { detailsShowing, handleCheckboxToggle }
}
// capitalize first letter of each word
export const capitalizeWords = (str: string): string => {
  return str.replace(/\b\w/g, (match) => match.toUpperCase())
}

// replace words from API to display correctly in chef tags
export const replaceWords = (word: string): string => {
  const wordMap: { [key: string]: string } = {
    inhouse: 'in-house',
    'high-end-serv': 'high-end services',
  }

  // check if the word is in the mapping; replace if necessary
  return wordMap[word] || word
}

// logic for Modal Component
export const useModal = () => {
  //CHANGE TO FALSE B4 PUSH
  const [showModal, setShowModal] = useState<boolean>(true)

  const handleModalToggle = () => {
    setShowModal((prev) => !prev)
  }

  return { showModal, handleModalToggle }
}

// State to manage the expanded state of each card
export interface CardExpansionHelper {
  expandedCards: string[]
  toggleCardExpansion: (label: string) => void
}

export const useCardExpansion = (firstLabel: string): CardExpansionHelper => {
  const [expandedCards, setExpandedCards] = useState<string[]>([firstLabel])

  const toggleCardExpansion = (label: string) => {
    setExpandedCards((prevExpanded) =>
      prevExpanded.includes(label)
        ? prevExpanded.filter((cardLabel) => cardLabel !== label)
        : [...prevExpanded, label]
    )
  }

  return {
    expandedCards,
    toggleCardExpansion,
  }
}

export const findAllFilters = (chefData: ChefDataProps[]) => {
  interface Filters {
    cuisineList: string[]
    discountsList: string[]
    tagsList: string[]
  }
  let filtersObject: Filters = {
    cuisineList: [],
    discountsList: [],
    tagsList: [],
  }
  if (!chefData) {
    loadChefs()
  }
  const cuisinesList: string[] = Array.from(
    new Set(chefData.flatMap((chef: ChefDataProps) => chef.cuisines || []))
  )
  const tagsList: string[] = Array.from(
    new Set(chefData.flatMap((chef: ChefDataProps) => chef.private || []))
  )
  const discountsList: string[] = Array.from(
    new Set(chefData.flatMap((chef: ChefDataProps) => chef.labels || []))
  )
  filtersObject = {
    cuisineList: cuisinesList,
    discountsList: discountsList,
    tagsList: tagsList,
  }

  return filtersObject
}

export const getChefDataFilterSort = () => {
  let rawChefData = useChefDataSelector()
  if (!rawChefData) {
    dispatch(loadChefs())
    rawChefData = useChefDataSelector()
  }
  const filters = useFilterSelector()
  const sort = useSortSelector()
  const ratingFilter = useFilterRatingSelector()
  let filteredRawData

  if (filters.length === 0) {
    filteredRawData = rawChefData
  } else {
    filteredRawData = rawChefData?.filter((chef) => {
      return filters.some((filter) => {
        // Check if any of the filters match cuisines, private, or labels
        return (
          chef.cuisines.includes(filter) ||
          chef.private.includes(filter) ||
          chef.labels.includes(filter)
        )
      })
    })
    console.log({ filteredRawData })
  }
  //check if filteredRawData is empty
  if (filteredRawData.length === 0) {
    filteredRawData = rawChefData
    console.log('Failed to filter data')
  }
  let finalFilteredData
  //check if ratingFilter state is valid
  if (!ratingFilter) {
    finalFilteredData = filteredRawData
    dispatch(filterRatings('All'))
  } else {
    switch (ratingFilter) {
      case 'At least 2 stars':
        finalFilteredData = filteredRawData?.filter(
          (chef) => chef.rating.value >= 2
        )
        break
      case 'At least 3 stars':
        finalFilteredData = filteredRawData?.filter(
          (chef) => chef.rating.value >= 3
        )
        break
      case 'At least 4 stars':
        finalFilteredData = filteredRawData?.filter(
          (chef) => chef.rating.value >= 4
        )
        break
      default:
        finalFilteredData = filteredRawData
    }
  }

  let sortedData
  if (!sort) {
    dispatch(changeSort('Rating'))
  }
  switch (sort) {
    //from centre of what exactly? Do we need to take in user location?
    case 'Distance from Centre':
      sortedData = finalFilteredData?.sort((a, b) => {
        let distanceA = parseFloat(a.distance_from_centre)
        let distanceB = parseFloat(b.distance_from_centre)
        return distanceA - distanceB
      })
      break
    case 'Number of Reviews':
      sortedData = finalFilteredData?.sort(
        (a, b) => b.rating.number_of_ratings - a.rating.number_of_ratings
      )
      break
    default:
      sortedData = finalFilteredData?.sort(
        (a, b) => b.rating.value - a.rating.value
      )
  }
  return sortedData
}
export const removeBadDiscount = (discount: string[]) => {
  const badDiscounts: string[] = ['currently unavailable', 'no discount']
  if (discount.some((item) => badDiscounts.includes(item))) {
    return discount.filter((item) => !badDiscounts.includes(item))
  } else {
    return discount
  }
}
