import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

// Prop Types for validation
const Otp = ({ otpLength = 6, onChange, autoFocus = true }) => {
  const [otp, setOtp] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);

  // Handle changes in the OTP input
  const handleChange = (e, index) => {
    const value = e.target.value;

    // Check if the entered value is a number
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if there is one
      if (index + 1 < otpLength) {
        ref.current[index + 1].focus();
      }

      // Call the onChange callback if provided
      if (onChange) {
        onChange(newOtp.join(""));
      }
    }
  };

  // Handle key down events for navigation and deletion
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      // Remove the character and focus the previous input
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
        if(index > 0)
            ref.current[index - 1].focus();

    } else if (e.key === "ArrowRight" && index < otpLength - 1) {
      ref.current[index + 1].focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      ref.current[index - 1].focus();
    }
  };

  // Focus the first input if autoFocus is true
  useEffect(() => {
    if (autoFocus && ref.current[0]) {
      ref.current[0].focus();
    }
  }, [autoFocus]);

  return (
    <div className="otp-container">
      <p className="otp-label">Enter OTP</p>
      <div className="otp-inputs">
        {otp.map((value, index) => (
          <input
            type="text"
            key={index}
            value={value}
            ref={(input) => (ref.current[index] = input)}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1} // Restrict input to one character
            className="otp-input"
          />
        ))}
              <button onClick={() => console.log(otp)}>Submit</button>
      </div>
    </div>
  );
};

// PropTypes for the Otp component
Otp.propTypes = {
  otpLength: PropTypes.number,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
};

export default Otp;
