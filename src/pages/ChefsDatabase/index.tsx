import { useEffect, useState } from 'react'
import ChefCards from '../../components/ChefCards'
import { ChefDataProps } from '../../components/ChefCards/types'
import ChefDetail from '../../components/ChefDetail/ChefDetail'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import Map from '../../components/Map/Map'
import SearchBarWrapper from '../../components/SearchBar/SearchBarWrapper'
import {
  useCheckboxToggle,
  useModal,
  useSwitchToggle,
  useWindowResize,
} from '../../utils/helpers'
import useSearchChefs from '../../utils/useSeachChefs'
import { useDispatch } from 'react-redux'
import { getChefDataFilterSort } from '../../utils/helpers'
import '../../components/LoadingSpinner/LoadingSpinner.scss'
import './ChefsDatabase.scss'

const ChefsDatabase = () => {
  //NOTE: This dispatch is being used for helper functions that require redux.  VSCODE is not recognizing this as being used, but it is.
  const dispatch = useDispatch() //DO NOT REMOVE
  //DO NOT REMOVE ABOVE DISPATCH

  const [loading, setLoading] = useState<boolean>(true)
  const { isSwitchChecked, setIsSwitchChecked } = useWindowResize(true)
  const { isOverrideActive, handleSwitchToggle } = useSwitchToggle(
    isSwitchChecked,
    setIsSwitchChecked
  )
  const { renderCheckbox } = useWindowResize(true)
  const { detailsShowing, handleCheckboxToggle } = useCheckboxToggle()

  //handling sort & filter with getChefDataFilterSort. Don't need below
  // const [sortedChefCards, setSortChefCards] = useState<ChefDataProps[]>([])
  const chefData = getChefDataFilterSort()
  const { showModal, handleModalToggle } = useModal()

  const isScrollEnabled = isSwitchChecked || isOverrideActive || detailsShowing
  const { searchResults, handleSearch } = useSearchChefs(chefData)
  const [activeCard, setActiveCard] = useState<number>(0)

  const onCardClick = (index: number) => {
    setActiveCard(index)
  }

  //NOTE: No longer need this use effect to spy on chefData. This will be incorporated into the funk. Can add loading states to have spinner come up if we add REDUX actions/reducers to keep tract of fetching status

  // useEffect(() => {
  //   try {
  //     chefData
  //   } catch (error) {
  //     console.log('An error occurred...')
  //     setLoading(true)
  //   }
  //   return () => {
  //     console.log('Done!')
  //     setLoading(false)
  //   }
  // }, [chefData])

  //NOTE: This is a temporary fix to simulate a loading state. This will be removed once we decide if we integrate with thunk for fetching status states
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [chefData])

  return (
    <div className={`${loading && 'spinner-wrapper'}`}>
      <SearchBarWrapper
        handleCheckboxToggle={handleCheckboxToggle}
        handleSwitchToggle={handleSwitchToggle}
        isSwitchChecked={isSwitchChecked}
        isOverrideActive={isOverrideActive}
        renderCheckbox={renderCheckbox}
        detailsShowing={detailsShowing}
        showModal={showModal}
        handleModalToggle={handleModalToggle}
        handleSearch={handleSearch}
      />
      {loading && <LoadingSpinner />}

      {!loading && searchResults.length === 0 ? (
        <ChefCards
          chefData={chefData}
          isScrollEnabled={isScrollEnabled}
          onCardClick={onCardClick}
          activeCard={activeCard}
        />
      ) : (
        <ChefCards
          chefData={searchResults}
          isScrollEnabled={isScrollEnabled}
          onCardClick={onCardClick}
          activeCard={activeCard}
        />
      )}

      {isScrollEnabled && (
        <section className="mapDetail-Container-ChefDB">
          {renderCheckbox && detailsShowing && (
            <ChefDetail activeCard={activeCard} />
          )}
          {(isSwitchChecked || isOverrideActive) && (
            <div>
              <div className="mockMap">Map</div>
              {/* <Map /> */}
            </div>
          )}
        </section>
      )}
    </div>
  )
}

export default ChefsDatabase
