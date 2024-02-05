import { useFilterSelector } from '../../../store/Conventional/selectors'

interface FilterRadioCardProps {
  radioArr: string[]
  radioHandle: (radio: string) => void
}
const FilterRadioCard = ({ radioArr, radioHandle }: FilterRadioCardProps) => {
  const filterRatingChoice = useFilterSelector()
  return (
    <>
      {radioArr.map((radio: string) => (
        <li key={radio}>
          <input
            type="radio"
            name="filter"
            value={radio}
            checked={filterRatingChoice.includes(radio)}
            onChange={() => radioHandle(radio)}
          />
          <label htmlFor={radio}>{radio}</label>
        </li>
      ))}
    </>
  )
}
export default FilterRadioCard
