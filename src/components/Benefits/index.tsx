import Benefit from "../Benefit/index";
import NarrowContainer from "../NarrowContainer";

const Benefits = () => {
  return (
    <div className="benefitContainer">
      <h2 className="watermark">Benefits</h2>
      <NarrowContainer>
        <div className="benefitColumn">
          <Benefit
            title="Discounts"
            description="Lorem ipsum dolor sit amet, consectetur adiuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
          />
          <Benefit
            title="Quality"
            description="bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut m dolore"
          />
          <Benefit
            title="Inclusive Database"
            description="ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
          />
          <Benefit
            title="Convenience"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
        </div>
      </NarrowContainer>
    </div>
  );
};

export default Benefits;
