import { useRecoilValue } from "recoil";
import user from "../store/atom";

export default function Card() {
    const data = useRecoilValue(user);
    
    return (
      <div className="bg-slate-100 rounded-lg shadow-md mb-4 pb-10 w-[60%] mx-auto">
        <div className="bg-blue-700 h-28 rounded-t-lg w-full" />
        <div className="flex justify-center -mt-16 -mb-10">
          <img
            className="rounded-full border-4 border-white w-32 h-32"
            src={data?.avatar_url}
            alt="Avatar"
          />
        </div>
        <div className="px-12">
          <h1 className="text-3xl font-semibold">{data?.name}</h1>
          <h2 className="text-lg font-light text-gray-600">@{data?.login} | 📌{data?.location}</h2>
          <p className="text-gray-500 font-extralight"></p>
        </div>
        <div>
            <p className="text-gray-600 text-center px-12 mt-6">{data?.bio}</p>
        </div>
        <div className="h-[1px] bg-slate-300 my-6 w-[95%] mx-auto" />
        <div className="flex justify-around">
            <div className="text-center">
                <h1 className="text-2xl font-semibold">{data?.followers}</h1>
                <h2 className="text-gray-600">Followers</h2>
            </div>
            <div className="text-center">
                <h1 className="text-2xl font-semibold">{data?.following}</h1>
                <h2 className="text-gray-600">Following</h2>
            </div>
            <div className="text-center">
                <h1 className="text-2xl font-semibold">{data?.public_repos}</h1>
                <h2 className="text-gray-600">Repositories</h2>
            </div>
        </div>
      </div>
    );
}