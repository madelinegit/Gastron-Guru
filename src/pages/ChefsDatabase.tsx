import { useState, useEffect } from 'react'
import useChef from '../utils/Api'
import SwitchInput from '../components/Inputs/SwitchInput'
import CheckboxInput from '../components/Inputs/CheckboxInput'

const ChefsDatabase = () => {
  const [isSwitchChecked, setIsSwitchChecked] = useState<boolean>(false)
  const [isOverrideActive, setIsOverrideActive] = useState<boolean>(false)

  useEffect(() => {
    handleWindowSizeChange()
    window.addEventListener('resize', handleWindowSizeChange)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const handleWindowSizeChange = () => {
    const windowWidth = window.innerWidth
    if (!isOverrideActive) {
      setIsSwitchChecked(windowWidth > 600)
    }
  }

  const handleSwitchToggle = () => {
    setIsSwitchChecked((prev) => {
      if (!isOverrideActive) {
        setIsOverrideActive(true)
      }
      return !prev
    })
  }

  return (
    <>
      <SwitchInput isChecked={isSwitchChecked} onToggle={handleSwitchToggle} />
      <CheckboxInput />
      {/* Render other components */}
    </>
  )
}

export default ChefsDatabase
