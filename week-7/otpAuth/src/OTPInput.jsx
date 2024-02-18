import { useState, useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function OTPInput({length, onChange}) {
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        const newOTP = [...otp];
        newOTP[index] = value;
        setOtp(newOTP);
        onChange(newOTP.join(''));
        if(value !== '' && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if(e.key === 'Backspace' && index > 0 && otp[index] === '') {
            inputRefs.current[index - 1].focus();
        }
    }

    return (
        <div>
            {otp.map((digit, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onFocus={(e) => e.target.select()}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(ref) => inputRefs.current[index] = ref}
                />
            ))}
        </div>
    )
}