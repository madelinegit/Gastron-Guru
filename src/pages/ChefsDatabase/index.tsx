import SwitchInput from '../../components/Inputs/SwitchInput'
import CheckboxInput from '../../components/Inputs/CheckboxInput'
import {
  useWindowResize,
  useSwitchToggle,
  useCheckboxToggle,
  useModal,
  useCardExpansion,
} from '../../utils/helpers'
import SearchBar from '../../components/SearchBar'
import ChefCards from '../../components/ChefCards'
import Modal from '../../components/Modal/Modal'
import ModalCard from '../../components/Modal/ModalCard'
import MockNarrowContainer from '../../components/Modal/MockNarrowContainer'
import useChef from '../../utils/Api'
import ArrowButton from '../../components/Buttons/ArrowButton'
import { modalData } from '../../utils/Data'

const ChefsDatabase = () => {
  const { isSwitchChecked, setIsSwitchChecked } = useWindowResize(true)
  const { isOverrideActive, handleSwitchToggle } = useSwitchToggle(
    isSwitchChecked,
    setIsSwitchChecked
  )
  const { renderCheckbox } = useWindowResize(true)
  const { detailsShowing, handleCheckboxToggle } = useCheckboxToggle()

  const { showModal, handleModalToggle } = useModal()

  const chefData = useChef()

  const { expandedCards, toggleCardExpansion } = useCardExpansion(
    modalData[0].label
  )

  return (
    <>
      <SearchBar />
      <ArrowButton handleBtnToggle={handleModalToggle} state={showModal} />
      {showModal && (
        <Modal>
          <MockNarrowContainer>
            {' '}
            {modalData.map((card) => (
              <ModalCard
                key={card.label}
                {...card}
                isExpanded={expandedCards.includes(card.label)}
                onToggleExpansion={() => toggleCardExpansion(card.label)}
              />
            ))}
          </MockNarrowContainer>
        </Modal>
      )}
      <SwitchInput
        isChecked={(isSwitchChecked && !isOverrideActive) || isOverrideActive}
        onToggle={handleSwitchToggle}
      />

      {renderCheckbox && (
        <CheckboxInput
          onCheckboxToggle={handleCheckboxToggle}
          isChecked={detailsShowing}
        />
      )}

      <ChefCards chefData={chefData} />

      {(isSwitchChecked || isOverrideActive || detailsShowing) && (
        <section>
          {(isSwitchChecked || isOverrideActive) && <h1>Map</h1>}
          {renderCheckbox && detailsShowing && <h1>Details</h1>}
        </section>
      )}
    </>
  )
}

export default ChefsDatabase
