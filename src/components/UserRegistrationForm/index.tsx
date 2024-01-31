import { useRef, useState } from 'react';
import './UserRegistrationForm.scss';
import RegistrationModal from '../Modal/RegistrationModal';

const clearAndDisableInput = (ref: React.RefObject<HTMLInputElement>) => {
  ref.current!.value = '';
  ref.current!.disabled = true;
};

export const UserRegistrationForm: React.FC = () => {
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleValidate = (
    name: string,
    email: string,
    password: string
  ): boolean => {
    if (name === '' && email === '' && password === '') {
      setError('Please fill the form fields');
      return false;
    }

    if (!name || name === '') {
      setError('Please enter your name');
      return false;
    }

    if (
      !email ||
      email === '' ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !email.includes('@')
    ) {
      setError('Please enter a valid email address');
      return false;
    }

    if (!password || password === '') {
      setError('Please enter a valid password');
      return false;
    }

    if (password.length < 8) {
      setError('Your password must have more than 8 characters');
      return false;
    }

    return true;
  };

  const handleSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const inputNameValue: string = nameRef.current!.value;
    const inputEmailValue: string = emailRef.current!.value;
    const inputPasswordValue: string = passwordRef.current!.value;

    if (handleValidate(inputNameValue, inputEmailValue, inputPasswordValue)) {
      setError('');
      clearAndDisableInput(nameRef);
      clearAndDisableInput(emailRef);
      clearAndDisableInput(passwordRef);
      setSuccess(true);
      // TODO: make the api post with user information
    }
  };

  return (
    <main
      className={`user-registration-container ${
        success ? 'success-modal-overlay' : ''
      }`}
    >
      {success && (
        <RegistrationModal>
          <h3 className="modal-title">
            You have been successfully registered!
          </h3>
          <div className="buttons">
            <button className="dark-blue-btn">Search database</button>
            <button className="dark-blue-btn">Create user profile</button>
            <button className="dark-blue-btn">Create chefs profile</button>
          </div>
        </RegistrationModal>
      )}
      <div className="wrapper">
        <h3>Register</h3>
        <form
          onSubmit={handleSubmit}
          method="post"
          className="user-registration-form"
        >
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className={`input ${error.includes('name') && 'error'}`}
              ref={nameRef}
              required
            />
            {error.includes('name') && (
              <span className="error-span">{error}</span>
            )}
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className={`input ${error.includes('email') && 'error'}`}
              ref={emailRef}
              required
            />
            {error.includes('email') && (
              <span className="error-span">{error}</span>
            )}
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className={`input ${error.includes('password') && 'error'}`}
              ref={passwordRef}
              required
            />
            {error.includes('password') && (
              <span className="error-span">{error}</span>
            )}
          </div>
          {error.includes('form') && (
            <span className="error-span">{error}</span>
          )}

          <button
            type="submit"
            className="button-primary submit-btn"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
};
