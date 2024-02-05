import './FilterButtonCard.scss'
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
  return (
    <>
      {btnArr.map((btn) => (
        <li key={btn}>
          <button
            onClick={() => btnHandle(btn)}
            value={btn}
            className={
              isBtnActive.includes(btn) ? 'activeFilter' : 'inactiveFilter'
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
