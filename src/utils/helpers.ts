import { useState, useEffect } from 'react'

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

  return { isSwitchChecked: state, setIsSwitchChecked: setState }
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
  const [detailsShowing, setDetailsShowing] = useState<boolean>(false)

  const handleCheckboxToggle = () => {
    setDetailsShowing((prev) => !prev)
  }

  return { detailsShowing, handleCheckboxToggle }
}
