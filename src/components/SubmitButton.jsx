import React from 'react';

function ToggleButton({ action, toggleAction }) {
  return (
    <p>
      {action === 'Sign Up'
        ? 'Already have an account? '
        : 'Don\'t have an account? '}
      <button type='button' onClick={toggleAction}>
        {action === 'Sign In' ? 'Sign Up here' : 'Sign In here'}
      </button>
    </p>
  );
}

export default ToggleButton;