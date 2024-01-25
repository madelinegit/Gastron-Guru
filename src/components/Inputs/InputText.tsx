import './InputText.scss';

type InputTextProps = {
  label: string;
  id: string;
  className: string;
  ref: React.RefObject<HTMLInputElement>;
};

export const InputText = ({ label, id, className, ref }: InputTextProps) => {
  return (
    <div className="input-text-container">
      <label htmlFor={id}>{label}</label>
      <input type="text" className={className} id={id} ref={ref} />
    </div>
  );
};
