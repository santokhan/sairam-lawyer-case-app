import React, { useState, useRef } from 'react';

interface OtpInputProps {
    length: number; // Number of OTP digits
    onChange: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length, onChange }) => {
    const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
    const inputRefs = Array.from({ length }, () => useRef<HTMLInputElement>(null));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        setOtp((prevOtp) => {
            const updatedOtp = [...prevOtp];
            updatedOtp[index] = value;
            return updatedOtp;
        });

        const updatedOtpString = otp.join('');
        onChange(updatedOtpString);

        if (value === '' || (index < length - 1 && value !== '')) {
            const current = inputRefs[index + 1].current
            if (current) {
                current.focus();
            }
        }
    };

    return (
        <div className='flex gap-2 items-center'>
            {otp.map((digit, index) =>
                <input
                    type="text"
                    key={index}
                    value={digit}
                    ref={inputRefs[index]}
                    onChange={(e) => handleChange(e, index)}
                    maxLength={1}
                    className="w-10 h-10 border rounded-lg text-lg flex justify-center items-center off-arrow text-center focus:outline-none"
                />)}
        </div>
    );
};

export default OtpInput;
