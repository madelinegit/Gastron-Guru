import './Benefit.scss'
const Benefit = ({title, description}) => {
  return (
    <div className='benefit'>
      <h4>{title}</h4>
      <p> {description}</p>
    </div>
  )
}
export default Benefit