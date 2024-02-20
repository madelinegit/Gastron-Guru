import Activity from "../Activity";
import ManCooking from "../../assets/images/man-cooking.jpg";
import DancingCouple from "../../assets/images/dancing-couple.jpg";
import CookoutEvents from "../../assets/images/food.jpg";
import "./ForEveryOccasion.scss";
import NarrowContainer from "../NarrowContainer";

const ForEveryOccasion = () => {
  return (
    <div className="for-every-occasion-container">
      <NarrowContainer>
        <h2 className="title">For Every Occasion</h2>
        <Activity
          inverted={false}
          image={ManCooking}
          title="House Chef"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, pariatur molestiae dolores libero quisquam vero fugit."
        />
        <Activity
          inverted={true}
          image={DancingCouple}
          title="Wedding Cooking"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, pariatur molestiae dolores."
        />
        <Activity
          inverted={false}
          image={CookoutEvents}
          title="Cookout Events"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, pariatur molestiae dolores libero quisquam vero fugit ducimus cumque."
        />
      </NarrowContainer>
    </div>
  );
};

export default ForEveryOccasion;
