import { useAuth0 } from '@auth0/auth0-react';
import { useRef } from 'react';
import Auth from '../../utils/AuthService';

const LoginButton = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const mountRef = useRef(0);
  console.log(user)
  if (user != null) {
    if(mountRef.current === 0){
      checkUserFn(String(user.sub), String(user.name), String(user.email));
    }
    mountRef.current = 1;
  } 
  async function checkUserFn(authID:string, name:string, email:string) {
    try {
      const response = await fetch('http://localhost:3000/checkUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ authID, name, email }),
      });
      
      if (!response.ok) {
        throw new Error('Response was not ok');
      }

      const data = await response.json();
      console.log(data);
      Auth.login(authID);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {!isAuthenticated ? (
        <button className="outline-gold-button" onClick={() => loginWithRedirect()}>
          Sign In
        </button>
      ) : (
        <div>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.given_name}</h2>
        </div>
        )}
    </div>
  );
};

export default LoginButton;