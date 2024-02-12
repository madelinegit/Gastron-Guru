import "./Ribbon.scss";

interface RibbonProps {
  label: string | undefined;
}

const discountPriority = ["2 for 1", "30% off", "20% off", "10% off"];

const Ribbon = ({ label }: RibbonProps) => {
  const bestDiscount = label
    ? discountPriority.filter((discount) => label.includes(discount))
    : [];
  return (
    <div className="ribbon">
      <p>{bestDiscount?.[0]}</p>
    </div>
  );
};

export default Ribbon;
