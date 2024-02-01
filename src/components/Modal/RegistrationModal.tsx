import './RegistrationModal.scss';

type RegistrationModalProps = {
  children: React.ReactNode;
};

const RegistrationModal = ({ children }: RegistrationModalProps) => {
  return <div className="registration-modal-container">{children}</div>;
};

export default RegistrationModal;
