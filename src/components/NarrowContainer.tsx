import './NarrowContainer.scss';

type NarrowContainerProps = {
  children: React.ReactNode;
};

const NarrowContainer = ({ children }: NarrowContainerProps) => {
  return <div className="narrow-container">{children}</div>;
};

export default NarrowContainer;
