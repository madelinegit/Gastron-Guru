import ArrowButton from '../Buttons/ArrowButton'
import './ReviewModal.scss'
import RatingStars from '../../components/RatingStars'
import RatingText from '../RatingText'
import TotalRatings from '../TotalRatings'
import RatingDistributionList from '../RatingDistributionList'
import IconButton from '../IconButton'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
interface ReviewModalProps {
  label: string
  isExpanded: boolean
  onToggleExpansion: () => void
}
const ReviewModal = ({
  label,
  isExpanded,
  onToggleExpansion,
}: ReviewModalProps) => {
  return (
    <div className='review-modal'>
      <div className='review-modal-header'>
        <span>{label}</span>
        <ArrowButton handleBtnToggle={onToggleExpansion} state={isExpanded} />
      </div>
      {
        isExpanded && (
          <>
            <div className='review-modal-stars-text'>
              <RatingStars rating={4.3} />
              <RatingText text={4.3} />
            </div>
            <TotalRatings total={250} />
            <RatingDistributionList ratings={[4, 3, 2, 1, 4, 3, 4, 5, 5, 5, 5]} />
            <hr />
            <div className='review-modal-button'>
              <IconButton type='button' icon={faChevronRight} label='See customer reviews' iconPosition='after' onClick={() => console.log('clicked!')}/>
            </div>
          </>
        )
      }
    </div>
  )
}
export default ReviewModal
