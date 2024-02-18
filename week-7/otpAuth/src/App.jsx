import { useState } from 'react'
import './App.css'
import OTPInput from './OTPInput'

function App() {

  const [OTP, setOTP] = useState('')

  const handleChange = (otp) => {
    setOTP(otp)
  }

  return (
    <div className="card">
      <h2>OTP Input</h2>
      <OTPInput length={6} onChange={handleChange} />
      {OTP !== "" && <p>Entered OTP : {OTP} </p>}
      <button onClick={() => setOTP("")} style={{ marginTop: 10 }}>
        Login
      </button>
    </div>
  );
}

export default App
