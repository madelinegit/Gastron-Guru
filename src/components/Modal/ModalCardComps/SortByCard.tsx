import ArrowButton from '../../Buttons/ArrowButton'
import '../Modalv3/Modalv3.scss'
import './FilterRadioCard.scss'
interface SortByCardProps {
  expandedCards: string[]
  toggleCardExpansion: (cardName: string) => void
  sortBy: string
  handleSortChange: (sortBy: string) => void
}

const SortByCard = ({
  expandedCards,
  toggleCardExpansion,
  sortBy,
  handleSortChange,
}: SortByCardProps) => {
  const sortingOptions = ['Rating', 'Number of Reviews', 'Distance from Centre']
  const cardFor = 'Sort by:'
  return (
    <article className="modalCard">
      <div className="modalCard-header">
        <h2>Sort by:</h2>
        <ArrowButton
          handleBtnToggle={() => toggleCardExpansion(cardFor)}
          state={expandedCards.includes(cardFor)}
        />
      </div>
      {expandedCards.includes(cardFor) && (
        <ul className="modalCard-List">
          {sortingOptions.map((option) => (
            <li key={option}>
              <input
                type="radio"
                name="sorting"
                value={option}
                checked={sortBy === option}
                onChange={() => handleSortChange(option)}
                className="modalFilterRadio"
              />
              <label htmlFor={option}>{option}</label>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
export default SortByCard
