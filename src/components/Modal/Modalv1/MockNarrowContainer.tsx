import './MockNarrowContainer.scss'

const MockNarrowContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="narrowModal">{children}</div>
}
export default MockNarrowContainer
