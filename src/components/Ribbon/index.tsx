import "./Ribbon.scss";

interface RibbonProps {
  label: string | undefined;
}

const Ribbon = ({ label }: RibbonProps) => (
  <div className="ribbon">
    <p>{label}</p>
  </div>
);

export default Ribbon;
