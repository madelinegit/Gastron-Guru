import ArrowButton from '../../Buttons/ArrowButton'

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
  console.log(handleSortChange)
  return (
    <article className="modalCard">
      <div className="cardHeader">
        <h2>Sort by:</h2>
        <ArrowButton
          handleBtnToggle={() => toggleCardExpansion(cardFor)}
          state={expandedCards.includes(cardFor)}
        />
      </div>
      {expandedCards.includes(cardFor) && (
        <ul>
          {sortingOptions.map((option) => (
            <li key={option}>
              <input
                type="radio"
                name="sorting"
                value={option}
                checked={sortBy === option}
                onChange={() => handleSortChange(option)}
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
