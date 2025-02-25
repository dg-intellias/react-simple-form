import { useState } from 'react';

import '/styles/Form.css';

import InputField from './InputField';
import SubmitButton from './SubmitButton';

import { validateSignUp } from '../utils/validateSignUp';
import { validateSignIn } from '../utils/validateSignIn';

function Form() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [action, setAction] = useState('Sign In');

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    rePassword: ''
  });

  const handleSignUp = (e) => {
    e.preventDefault();

    const state = {
      username,
      email,
      password,
      rePassword
    };

    const setState = {
      setUsername,
      setEmail,
      setPassword,
      setRePassword
    };

    setErrors({
      username: '',
      email: '',
      password: '',
      rePassword: ''
    });

    validateSignUp(state, setState, setErrors);
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    const state = {
      username,
      password
    };

    const setState = {
      setUsername,
      setPassword
    };

    setErrors({
      username: '',
      password: ''
    });

    validateSignIn(state, setState, setErrors);
  };

  const toggleAction = () => {
    if (action === 'Sign Up') {
      setAction('Sign In');

      setUsername('');
      setPassword('');

      setErrors({
        username: '',
        password: ''
      });
    } else {
      setAction('Sign Up');

      setUsername('');
      setEmail('');
      setPassword('');
      setRePassword('');

      setErrors({
        username: '',
        email: '',
        password: '',
        rePassword: ''
      });
    }
  };

  return (
    <>
      <form onSubmit={action === 'Sign In' ? handleSignIn : handleSignUp} className="sign-up-form">
        <h2>{action}</h2>

        <InputField
          id='username'
          label='Username'
          type='text'
          value={username}
          onChange={setUsername}
          error={errors.username}
          placeholder='Enter your username here'
        />

        {action === 'Sign In' ? null : (
          <InputField
            id='email'
            label='Email'
            type='text'
            value={email}
            onChange={setEmail}
            error={errors.email}
            placeholder='Enter your email here'
          />
        )}

        <InputField
          id='password'
          label='Password'
          type='password'
          value={password}
          onChange={setPassword}
          error={errors.password}
          placeholder='**********'
        />

        {action === 'Sign In' ? null : (
          <InputField
            id='rePassword'
            label='Repeat Password'
            type='password'
            value={rePassword}
            onChange={setRePassword}
            error={errors.rePassword}
            placeholder='**********'
          />
        )}

        <button type='submit'>{action}</button>

        <SubmitButton action={action} toggleAction={toggleAction} />
      </form>
    </>
  );
}

export default Form;
