import './Benefit.scss'

type BenefitProp = {
  title: string
  description: string
}


const Benefit = ({title, description}:BenefitProp) => {
  return (
    <div className='benefit'>
      <h4>{title}</h4>
      <p> {description}</p>
    </div>
  )
}
export default Benefit