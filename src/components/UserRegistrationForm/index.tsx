import { useRef } from 'react';

export const UserRegistrationForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    return console.log(
      nameRef.current!,
      emailRef.current!,
      passwordRef.current!
    );
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="input"
          ref={nameRef}
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="input"
          ref={emailRef}
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="input"
          ref={passwordRef}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="button-primary" onClick={handleSubmit}>
        Register
      </button>
    </form>
  );
};
