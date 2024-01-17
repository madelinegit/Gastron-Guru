type ActivitiesProps = {
  image: string;
  altText: string;
  title: string;
  description?: string;
  inverted: boolean;
};

const Activities = ({
  image,
  altText,
  title,
  description,
  inverted,
}: ActivitiesProps) => {
  return (
    <div
      className={
        inverted! ? 'activities-container inverted' : 'activities-container'
      }
    >
      <img src={image} alt={altText} className="img" />
      <div className="description">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>View</button>
      </div>
    </div>
  );
};

export default Activities;
