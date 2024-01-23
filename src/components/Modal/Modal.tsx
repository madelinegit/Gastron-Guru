/*
  TASK: Create a modal for the filter options. Needs to have reusable components and the cards themselves need to be HOC

  1. Understand HOC
  2. Understand the reusable logic

  Create resuable component for the filter modal. Components need resuable logic

  1. Make the modal container
  2. Make a single modal card
  3. Logic for modal container to render the cards

  4. Modal needs to be open / closed on click of the filter arrow
  5. Default behavior of modal cards needs established
    a. Default: first card is open while others are closed

  6. Modal cards need to be open / closed on click of their specific arrow


*/
import './Modal.scss'

const Modal = ({ children }: { children: React.ReactNode }) => {
  return <section className="filterModalContainer">{children}</section>
}
export default Modal
