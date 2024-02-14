import { Link } from 'react-router-dom';

type SuccessPageProps = {
  goToUserProfileForm: React.MouseEventHandler<HTMLButtonElement>;
  goToChefProfileForm: React.MouseEventHandler<HTMLButtonElement>;
};

const Success = ({
  goToUserProfileForm,
  goToChefProfileForm,
}: SuccessPageProps) => {
  return (
    <div>
      <h3 className="modal-title">You have been successfully registered!</h3>
      <div className="buttons">
        <Link to={'/chefs-database'} className="link">
          <button className="dark-blue-btn">Search database</button>
        </Link>
        <button className="dark-blue-btn" onClick={goToUserProfileForm}>
          Create user profile
        </button>
        <button className="dark-blue-btn" onClick={goToChefProfileForm}>
          Create chefs profile
        </button>
      </div>
    </div>
  );
};

export default Success;
