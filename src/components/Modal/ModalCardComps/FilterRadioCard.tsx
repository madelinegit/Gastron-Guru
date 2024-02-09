import { useFilterRatingSelector } from '../../../store/Conventional/selectors'
import './FilterRadioCard.scss'
interface FilterRadioCardProps {
  radioArr: string[]
  radioHandle: (radio: string) => void
}
const FilterRadioCard = ({ radioArr, radioHandle }: FilterRadioCardProps) => {
  const filterRatingChoice = useFilterRatingSelector()
  return (
    <>
      {radioArr.map((radio: string) => (
        <li key={radio}>
          <input
            type="radio"
            name="filter"
            value={radio}
            checked={filterRatingChoice === radio}
            onChange={() => radioHandle(radio)}
            className="modalFilterRadio"
          />
          <label htmlFor={radio}>{radio}</label>
        </li>
      ))}
    </>
  )
}
export default FilterRadioCard
