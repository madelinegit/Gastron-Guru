import "./MultiStepForm.scss";

type FormWrapperProps = {
  children: React.ReactNode;
  title: string;
};

const FormWrapper = ({ children, title }: FormWrapperProps) => {
  return (
    <div className="page-container">
      <h4 className="title">{title}</h4>
      <div className="inputs">{children}</div>
    </div>
  );
};

export default FormWrapper;
