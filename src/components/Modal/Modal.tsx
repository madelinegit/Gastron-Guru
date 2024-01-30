import './Modal.scss'

const Modal = ({ children }: { children: React.ReactNode }) => {
  return <section className="filterModalContainer">{children}</section>
}
export default Modal
