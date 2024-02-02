import './Input.scss';

interface InputMode {
  inputMode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';
}

type InputProps = InputMode & {
  label: string;
  type: string;
  className: string;
  autoFocus: boolean;
  maxLength?: number;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  type,
  inputMode,
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
        inputMode={inputMode}
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
