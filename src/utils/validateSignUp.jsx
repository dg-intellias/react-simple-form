const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
};

export function validateSignUp(state, setState, setErrors) {
  const newErrors = {};
  let isValid = true;

  if (!state.username) {
    newErrors.username = 'Username is required';
    isValid = false;
  }

  if (!state.email) {
    newErrors.email = 'Email is required';
    isValid = false;
  } else if (!validateEmail(state.email)) {
    newErrors.email = 'Invalid email format';
    isValid = false;
  }

  if (!state.password) {
    newErrors.password = 'Password is required';
    isValid = false;
  }

  if (!state.rePassword) {
    newErrors.rePassword = 'Please confirm your password';
    isValid = false;
  } else if (state.password !== state.rePassword) {
    setState.setPassword('');
    setState.setRePassword('');

    newErrors.rePassword = 'Passwords don\'t match';
    isValid = false;
  }

  if (!isValid) {
    setErrors(newErrors);
  } else {
    setState.setUsername('');
    setState.setEmail('');
    setState.setPassword('');
    setState.setRePassword('');

    console.log(`Username: ${state.username}`);
    console.log(`Email: ${state.email}`);
  }
};