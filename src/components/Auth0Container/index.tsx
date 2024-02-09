import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import Profile from '../Profile';

const AuthContainer = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="auth0-container">
            {!isAuthenticated && <LoginButton />}
            {isAuthenticated && <LogoutButton />}
            {isAuthenticated && <Profile />}
        </div>
    );
};

export default AuthContainer;