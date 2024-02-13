import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from './api';

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlesignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const data = await signUp({ email, password });
            if(data){
                localStorage.setItem("loggedIn", true);
                console.log(data);
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                navigate("/");
            }
        } catch (error) {
            console.error('Error signing up:', error);
            throw error;
        }
    }

  return (
    <div className="bg-slate-100 h-screen flex flex-col gap-8 justify-center items-center">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <div className="bg-white shadow-lg rounded-lg p-8 w-1/3">
        <h2 className="text-2xl font-semibold">Sign Up</h2>
        <form className="flex flex-col gap-4 mt-4">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="-mt-2 border border-gray-300 text-sm focus:outline-indigo-600 bg-[#f9fafb] rounded-md p-2 pl-4"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="-mt-2 border border-gray-300 text-sm focus:outline-indigo-600 bg-[#f9fafb] rounded-md p-2 pl-4"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="-mt-2 border border-gray-300 text-sm focus:outline-indigo-600 bg-[#f9fafb] rounded-md p-2 pl-4"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={handlesignup} className="bg-blue-600 text-sm font-medium text-white rounded-md p-2">
            Create account
          </button>
          <div className="my-2 cursor-pointer text-blue-600 underline-offset-1 underline text-center text-sm font-medium">
            <Link to="/login">Already have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
