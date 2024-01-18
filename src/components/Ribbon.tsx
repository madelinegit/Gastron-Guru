interface RibbonProps {
  label: string | undefined;
}

const Ribbon: React.FC<RibbonProps> = ({ label }) => (
  <div className="ribbon">
    <p>{label}</p>
  </div>
);

export default Ribbon;