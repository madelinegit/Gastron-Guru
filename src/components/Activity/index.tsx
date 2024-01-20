import "./Activity.scss";

type ActivityProps = {
  image: string;
  title: string;
  description?: string;
  inverted: boolean;
};

const Activity = ({ image, title, description, inverted }: ActivityProps) => {
  return (
    <div
      className={
        inverted! ? "activity-container-inverted" : "activity-container"
      }
    >
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="text">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="">
          <button className="outline-gold-button">view</button>
        </a>
      </div>
    </div>
  );
};

export default Activity;
