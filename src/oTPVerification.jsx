import React, { useState } from 'react';

const OTPVerificationScreen = () => {
  // Define state to handle the OTP input
  const [otp, setOTP] = useState('');

  // Handle input change in OTP input box
  const handleOTPChange = (event) => {
    const { value } = event.target;
    setOTP(value);
  };

  // Handle form submission on button click
  const handleSubmit = (event) => {
    event.preventDefault();
    // Log the OTP to the console
    console.log('OTP:', otp);
  };

  return (
    <div className="container">
      <h1>OTP Verification</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="number"
            className="otp-input"
            value={otp}
            onChange={handleOTPChange}
            placeholder="Enter OTP"
            maxLength={4}
            minLength={4}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Verify
        </button>
      </form>
    </div>
  );
};

export default OTPVerificationScreen;