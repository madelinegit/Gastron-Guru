import './RegistrationModal.scss';

type RegistrationModalProps = {
  children: React.ReactNode;
  className?: string;
};

const RegistrationModal = ({ children, className }: RegistrationModalProps) => {
  return (
    <div className={`registration-modal-container ${className}`}>
      {children}
    </div>
  );
};

export default RegistrationModal;
