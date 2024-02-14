import React from "react";
import { RiCloseLine } from "react-icons/ri";
import "./Login.css"
import { FaGoogle, FaEnvelope, FaApple } from "react-icons/fa"; 

function SignInModal({ isOpen, onClose }) {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="close-icon" onClick={onClose}>
            <RiCloseLine />
          </span>
        </div>
        <div className="modal-body">
          {/* Modal content goes here */}
          <h2>Sign In</h2>
          <button>
            <FaGoogle /> Continue with Google
          </button>
          <button>
            <FaEnvelope /> Continue with Email
          </button>
          <button>
            <FaApple /> Continue with Apple
          </button>
          <input type="text" placeholder="Enter your phone number" />
          <p>Terms and conditions text goes here.</p>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;
