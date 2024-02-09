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
import Map from '../../components/Map/Map'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { useEffect, useState } from 'react'
import ModalWithSortingAndFiltering from '../../components/Modal/Modalv3/Modalv3'
import {
  useChefDataSelector,
  useFilterSelector,
  useSortSelector,
} from '../../store/Conventional/selectors'
import { loadChefs } from '../../store/Conventional/thunk'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../store/Conventional/actionCreator'

const ChefsDatabase = () => {
  const dispatch = useDispatch()
  const { isSwitchChecked, setIsSwitchChecked } = useWindowResize(true)
  const { isOverrideActive, handleSwitchToggle } = useSwitchToggle(
    isSwitchChecked,
    setIsSwitchChecked
  )
  const { renderCheckbox } = useWindowResize(true)
  const { detailsShowing, handleCheckboxToggle } = useCheckboxToggle()

  const getChefDataFilterSort = () => {
    let rawChefData = useChefDataSelector()
    if (!rawChefData) {
      dispatch(loadChefs())
      rawChefData = useChefDataSelector()
    }
    const filters = useFilterSelector()
    const sort = useSortSelector()
    let filteredData

    if (
      (filters.length === 1 && filters[0] === 'All') ||
      filters.length === 0
    ) {
      filteredData = rawChefData
      // dispatch(setFilter('All'))
    } else {
      filteredData = rawChefData?.filter((chef) => {
        return filters.some((filter) => {
          // Check if any of the filters match cuisines, private, or labels
          return (
            chef.cuisines.includes(filter) ||
            chef.private.includes(filter) ||
            chef.labels.includes(filter)
          )
        })
      })
      console.log({ filteredData })
    }

    if (!filteredData) {
      filteredData = rawChefData
    }
    let sortedData = filteredData // remove once switch for sorting is working
    // switch (sort) {
    //   case 'Distance from centre':
    //     sortedData = filteredData?.sort((a, b) => a.distance - b.distance)
    //     break
    //   case 'Discount':
    //     sortedData = filteredData?.sort((a, b) => b.discount - a.discount)
    //     break
    //   default:
    //     sortedData = filteredData?.sort((a, b) => b.rating - a.rating)
    // }

    return sortedData
  }

  const { showModal, handleModalToggle } = useModal()

  const isScrollEnabled = isSwitchChecked || isOverrideActive || detailsShowing
  const chefData = getChefDataFilterSort()

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
