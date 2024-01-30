import { useRef, useState } from 'react';
import './UserRegistrationForm.scss';

export const UserRegistrationForm: React.FC = () => {
  const [error, setError] = useState<string>('');

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

    if (name === undefined || name === null || name === '') {
      setError('Please enter your name');
      return false;
    }

    if (
      email === undefined ||
      email === null ||
      email === '' ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !email.includes('@')
    ) {
      setError('Please enter a valid email address');
      return false;
    }

    if (password === undefined || password === null || password === '') {
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
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const inputNameValue: string = nameRef.current!.value;
    const inputEmailValue: string = emailRef.current!.value;
    const inputPasswordValue: string = passwordRef.current!.value;

    handleValidate(inputNameValue, inputEmailValue, inputPasswordValue);
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className={`input ${error.includes('name') && 'error'}`}
          ref={nameRef}
          onChange={handleChange}
          required
        />
        {error.includes('name') && <span className="error-span">{error}</span>}
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className={`input ${error.includes('email') && 'error'}`}
          ref={emailRef}
          onChange={handleChange}
          required
        />
        {error.includes('email') && <span className="error-span">{error}</span>}
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className={`input ${error.includes('password') && 'error'}`}
          ref={passwordRef}
          onChange={handleChange}
          required
        />
        {error.includes('password') && (
          <span className="error-span">{error}</span>
        )}
      </div>

      {error.includes('form') && <span className="error-span">{error}</span>}

      <button
        type="submit"
        className="button-primary submit-btn"
        onClick={handleSubmit}
      >
        Register
      </button>
    </form>
  );
};
