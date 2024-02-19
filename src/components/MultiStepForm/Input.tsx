import "./Input.scss";

export type InputProps = {
  label: string;
  type: string;
  id: string;
  className: string;
  autoFocus: boolean;
  maxLength?: number;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  type,
  id,
  className,
  autoFocus,
  maxLength,
  value,
  handleChange,
}: InputProps) => {
  return (
    <div className={`input-container ${className}`}>
      <label>{label}</label>
      <input
        type={type}
        id={id}
        className={className}
        required
        autoFocus={autoFocus}
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
