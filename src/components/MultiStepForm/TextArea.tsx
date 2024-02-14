import './TextArea.scss';

type TextAreaProps = {
  label: string;
  className: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({ label, className, value, handleChange }: TextAreaProps) => {
  return (
    <div className={`input-container  ${className}`}>
      <label>{label}</label>
      <textarea
        required
        value={value}
        onChange={handleChange}
        className={className}
      />
    </div>
  );
};

export default TextArea;
