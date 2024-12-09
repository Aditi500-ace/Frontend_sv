import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './VerificationPage.css';

const VerificationPage = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [image, setImage] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleVerify = () => {
    if (accountNumber && image) {
      setVerificationStatus('Your account has been successfully verified!');
    } else {
      setVerificationStatus('Please provide all the required information.');
    }
    alert(verificationStatus);
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <div className="verification-container">
        <div className="verification-box">
          <h1 className="verification-title">VERIFICATION</h1>
          <p className="verification-message">
            Please provide your account details and signature image for verification.
          </p>
          <label className="input-label" htmlFor="account-number">
            Enter your account number:
          </label>
          <input
            type="text"
            id="account-number"
            className="input-field"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          <label className="input-label" htmlFor="signature-image">
            Upload your signature:
          </label>
          <input
            type="file"
            id="signature-image"
            className="input-field"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <button className="go-home-btn" onClick={handleVerify}>
            Verify
          </button>
          <div className="about-us-link">
            <Link to="/about-us">Visit to know more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
