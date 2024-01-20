import Activity from './Activity';
import ManCooking from '../assets/images/man-cooking.jpg';
import DancingCouple from '../assets/images/dancing-couple.jpg';
import CookoutEvents from '../assets/images/food.jpg';
import './ForEveryOccasion.scss';

const ForEveryOccasion = () => {
  return (
    <div className="for-every-occasion-container">
      <h2>FOR EVERY OCCASION</h2>
      <Activity
        inverted={false}
        image={ManCooking}
        title="House Chef"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, pariatur molestiae dolores libero quisquam vero fugit ducimus cumque quasi ea adipisci dolorum nam ratione itaque soluta? Cum error quis ducimus."
      />
      <Activity
        inverted={true}
        image={DancingCouple}
        title="Wedding Cooking"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, pariatur molestiae dolores libero quisquam vero fugit ducimus cumque quasi ea adipisci dolorum nam ratione itaque soluta? Cum error quis ducimus."
      />
      <Activity
        inverted={false}
        image={CookoutEvents}
        title="Cookout Events"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, pariatur molestiae dolores libero quisquam vero fugit ducimus cumque quasi ea adipisci dolorum nam ratione itaque soluta? Cum error quis ducimus."
      />
    </div>
  );
};

export default ForEveryOccasion;
