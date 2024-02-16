// SignInModal.js

import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { FaGoogle, FaEnvelope, FaApple } from "react-icons/fa";
import "./Login.css";

function SignInModal({ isOpen, onClose }) {
  const [showProceedButton, setShowProceedButton] = useState(false);

  const handleOnlickInput = () => {
    setShowProceedButton(true);
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title">Get Started</div>
         <div>
         <button className="close-icon" onClick={onClose}>
            <RiCloseLine />
          </button>
         </div>
        </div>
        <div className="modal-body">
          <div className="button-container">
            <button className="button">
              <FaGoogle className="react-icon"/>
              Continue with Google
            </button>
            <button className="button">
              <FaEnvelope className="react-icon"/>
              Continue with Email
            </button>
            <button className="button">
              <FaApple className="react-icon"/>
              Continue with Apple
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter phone or email"
            onClick={handleOnlickInput}
          />
          {showProceedButton ? (
            <button className="proceed-button">Proceed</button>
          ) : (
            <div className="terms-condition-text">
              Terms and conditions apply
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignInModal;
