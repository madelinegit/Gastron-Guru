type InputProps = {
  inputType: string;
  id: string;
  className: string;
  label: string;
  ref: React.Ref<HTMLInputElement>;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

const Input = ({
  inputType,
  id,
  className,
  label,
  ref,
  onChange,
}: InputProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={inputType}
        id={id}
        className={className}
        ref={ref}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
