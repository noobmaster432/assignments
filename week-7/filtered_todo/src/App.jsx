import { useRecoilState, useRecoilValue } from "recoil";
import { filteredAtom, todoAtom } from "./store/atom";

function App() {
  const [filter, setFilter] = useRecoilState(filteredAtom);
  const todo = useRecoilValue(todoAtom);
  
  return (
    <div className="m-12">
      <h1 className="text-2xl font-bold mb-4">Filtered Todo</h1>
      <div className="flex justify-between gap-4 w-full">
        <input
          type="text"
          className="outline-none bg-slate-100 rounded-lg shadow-md py-2 px-4 w-11/12"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow">
          Filter
        </button>
      </div>
      <div className="mt-8">
        {todo.map((item) => (
          <div key={item.id} className="bg-slate-100 rounded-lg p-4 mb-4">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
