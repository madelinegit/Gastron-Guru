import React from 'react'
import SwitchInput from '../components/Inputs/SwitchInput'
import CheckboxInput from '../components/Inputs/CheckboxInput'
import {
  useWindowResize,
  useSwitchToggle,
  useCheckboxToggle,
} from '../utils/helpers'

const ChefsDatabase = () => {
  const { isSwitchChecked, setIsSwitchChecked } = useWindowResize(true)
  const { isOverrideActive, handleSwitchToggle } = useSwitchToggle(
    isSwitchChecked,
    setIsSwitchChecked
  )

  const { detailsShowing, handleCheckboxToggle } = useCheckboxToggle()

  return (
    <>
      <SwitchInput
        isChecked={(isSwitchChecked && !isOverrideActive) || isOverrideActive}
        onToggle={handleSwitchToggle}
      />

      {isSwitchChecked && (
        <CheckboxInput onCheckboxToggle={handleCheckboxToggle} />
      )}
      {(isSwitchChecked || isOverrideActive || detailsShowing) && (
        <section>
          {(isSwitchChecked || isOverrideActive) && <h1>Map</h1>}
          {isSwitchChecked && detailsShowing && <h1>Details</h1>}
        </section>
      )}
    </>
  )
}

export default ChefsDatabase
