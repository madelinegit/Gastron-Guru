type NarrowContainerProps = {
  children: React.ReactNode;
};

const NarrowContainer = ({ children }: NarrowContainerProps) => {
  return <div>{children}</div>;
};

export default NarrowContainer;
