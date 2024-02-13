import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUserData } from "./api";

const Profile = () => {
  const isAuthenticated = localStorage.getItem("loggedIn") === "true";
  return isAuthenticated ? <Card /> : <Navigate to="/login" />;
};

const Card = () => {
    const [data, setData] = useState({
      name: "Naam mein kya rakha hai",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum consequatur ab est asperiores saepe quam rerum dolorum id explicabo sint velit odio maxime cumque iusto ullam, itaque natus eius.",
      interests: ["Frontend Development", "Backend Development", "DevOps"],
      linkedIn: "",
      twitter: "",
    });
    useEffect(() => {
        const user = getUserData();
        setData(user);
    }, []);
    return (
      <div className="bg-slate-100 h-screen flex flex-col gap-8 justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-4 w-1/3">
          <h2 className="text-2xl font-semibold">
            {data?.name || "Naam mein kya rakha hai"}
          </h2>
          <p className="text-sm font-sans">
            {data?.description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eum consequatur ab est asperiores saepe quam rerum dolorum id explicabo sint velit odio maxime cumque iusto ullam, itaque natus eius."}
          </p>
          <ul>
            <div className="text-xl font-medium">Interests</div>
            <li> - Frontend Development</li>
            <li> - Backend Development</li>
            <li> - DevOps</li>
          </ul>
          <div className="flex justify-between">
            <button className="bg-blue-600 text-sm font-medium cursor-pointer text-white rounded-md p-2 w-1/3">
              LinkedIn
            </button>
            <button className="bg-blue-600 text-sm font-medium cursor-pointer text-white rounded-md p-2 w-1/3">
              Twitter
            </button>
          </div>
        </div>
      </div>
    );
}

export default Profile;
