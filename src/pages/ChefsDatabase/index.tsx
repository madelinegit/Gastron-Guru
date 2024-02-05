import SwitchInput from '../../components/Inputs/SwitchInput'
import CheckboxInput from '../../components/Inputs/CheckboxInput'
import {
  useWindowResize,
  useSwitchToggle,
  useCheckboxToggle,
  useModal,
} from '../../utils/helpers'
import SearchBar from '../../components/SearchBar'
import ChefCards from '../../components/ChefCards'
import useChef from '../../utils/Api'
import ArrowButton from '../../components/Buttons/ArrowButton'
import { modalData } from '../../utils/Data'
import Map from '../../components/Map/Map'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { useEffect, useState } from 'react'
import ModalWithSortingAndFiltering from '../../components/Modal/Modalv3/Modalv3'
import { useChefDataSelector } from '../../store/Conventional/selectors'
import { findAllFilters } from '../../utils/helpers'
import { loadChefs } from '../../store/Conventional/thunk'
import { ChefDataProps } from '../../components/ChefCards/types'

const ChefsDatabase = () => {
  const { isSwitchChecked, setIsSwitchChecked } = useWindowResize(true)
  const { isOverrideActive, handleSwitchToggle } = useSwitchToggle(
    isSwitchChecked,
    setIsSwitchChecked
  )
  const { renderCheckbox } = useWindowResize(true)
  const { detailsShowing, handleCheckboxToggle } = useCheckboxToggle()
  const chefData = useChef()
  const { showModal, handleModalToggle } = useModal()

  const isScrollEnabled = isSwitchChecked || isOverrideActive || detailsShowing

  //change back to true before push
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    try {
      chefData
    } catch (error) {
      console.log('An error occurred...')
      setLoading(true)
    }
    return () => {
      console.log('Done!')
      setTimeout(() => {
        // added just to make sure that it'll pass here
        setLoading(false)
      }, 2500)
    }
  }, [chefData])

  return (
    <div
      style={
        loading ? { overflow: 'hidden', position: 'fixed', width: '100vw' } : {}
      }
    >
      {loading && <LoadingSpinner />}
      <SearchBar />
      <ArrowButton handleBtnToggle={handleModalToggle} state={showModal} />
      {showModal && <ModalWithSortingAndFiltering chefData={chefData} />}
      <SwitchInput
        isChecked={(isSwitchChecked && !isOverrideActive) || isOverrideActive}
        onToggle={handleSwitchToggle}
      />
      <SearchBar />

      {/* {renderCheckbox && (
        <CheckboxInput
          onCheckboxToggle={handleCheckboxToggle}
          isChecked={detailsShowing}
        />
      )} */}

      <ChefCards chefData={chefData} isScrollEnabled={isScrollEnabled} />

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
