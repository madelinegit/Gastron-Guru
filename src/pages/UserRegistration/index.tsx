import { UserRegistrationForm } from '../../components/UserRegistrationForm';
import '../../components/UserRegistrationForm/UserRegistrationForm.scss';

const UserRegistration: React.FC = () => {
  return (
    <main className="user-registration-container">
      <div className="wrapper">
        <h3>Register</h3>
        <UserRegistrationForm />
      </div>
    </main>
  );
};

export default UserRegistration;
