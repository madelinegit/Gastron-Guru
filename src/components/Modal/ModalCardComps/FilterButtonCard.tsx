import './FilterButtonCard.scss'
import { removeBadDiscount } from '../../../utils/helpers'
interface FilterButtonCardProps {
  btnArr: string[]
  btnHandle: (btn: string) => void
  isBtnActive: string[]
}

const FilterButtonCard = ({
  btnArr,
  btnHandle,
  isBtnActive,
}: FilterButtonCardProps) => {
  //find and remove bad discount tags before rendering button options
  let handledBtnArr: string[] = removeBadDiscount(btnArr)

  return (
    <>
      {handledBtnArr.map((btn) => (
        <li key={btn}>
          <button
            onClick={() => btnHandle(btn)}
            value={btn}
            className={
              isBtnActive.includes(btn)
                ? 'activeFilter modalBtn'
                : 'inactiveFilter modalBtn'
            }
          >
            {btn}
          </button>
        </li>
      ))}
    </>
  )
}
export default FilterButtonCard
