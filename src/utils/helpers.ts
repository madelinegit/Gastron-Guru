import { useState, useEffect } from 'react'
import { loadChefs } from '../store/Conventional/thunk'
import { ChefDataProps } from '../components/ChefCards/types'

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
export const capitalizeWords = (str: string
  
  
  
  
   ): string => {
  return str.replace(/\b\w/g, (match) => match.toUpperCase())
}

// replace words from API to display correctly in chef tags
export const replaceWords = (word: string): string => {
  const wordMap: { [key: string]: string } = {
    "inhouse": "in-house",
    "high-end-serv": "high-end services",
  };

  // check if the word is in the mapping; replace if necessary
  return wordMap[word] || word;
};

// logic for Modal Component
export const useModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

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
