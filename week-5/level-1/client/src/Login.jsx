import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signIn } from "./api";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await signIn({ email, password });
      if(data) {
        localStorage.setItem("loggedIn", true);
        console.log(data);
        setEmail('');
        setPassword('');
        navigate("/");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  };

  return (
    <div className="bg-slate-100 h-screen flex flex-col gap-8 justify-center items-center">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <div className="bg-white shadow-lg rounded-lg p-8 w-1/3">
        <h2 className="text-2xl font-semibold">Sign in to your account</h2>
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
          <div className="flex">
            <div>
              <input
                type="checkbox"
                id="remember"
                className="rounded-md border border-gray-300 p-2"
              />
              <label htmlFor="remember" className="text-sm text-gray-500 ml-2">
                Remember me
              </label>
            </div>
            <div className="ml-auto cursor-pointer text-blue-600 text-sm font-medium underline">
              Forgot password?
            </div>
          </div>
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-sm font-medium text-white rounded-md p-2"
          >
            Log in to your account
          </button>
          <div className="my-2 cursor-pointer text-blue-600 underline-offset-1 underline text-center text-sm font-medium">
            <Link to="/signup">Don&apos;t have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
