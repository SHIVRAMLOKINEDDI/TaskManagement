import React from 'react';

const SignUpSuccessful = () => {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
  };


  return (
    <div style={containerStyle}>
      <h2>Sign Up Successful!</h2>
      <p>Congratulations! Your account has been successfully created.</p>
    </div>
  );
};

export default SignUpSuccessful;