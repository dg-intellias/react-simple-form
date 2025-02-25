export function validateSignIn(state, setState, setErrors) {
  const newErrors = {};
  let isValid = true;

  if (!state.username) {
    newErrors.username = 'Username is required';
    isValid = false;
  }

  if (!state.password) {
    newErrors.password = 'Password is required';
    isValid = false;
  }

  if (!isValid) {
    setErrors(newErrors);
  } else {
    setState.setUsername('');
    setState.setPassword('');

    console.log(`Welcome, ${state.username}`);
  }
};