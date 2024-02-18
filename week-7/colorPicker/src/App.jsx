import { useState } from 'react'

function App() {
  const [color, setColor] = useState('slate');

  const colors = [{
    name: 'Default',
    value: 'slate'
  },{
    name: 'Red',
    value: 'red' 
  },{
    name: 'Green',
    value: 'green' 
  },{
    name: 'Blue',
    value: 'blue' 
  },{
    name: 'Yellow',
    value: 'yellow' 
  },{
    name: 'Purple',
    value: 'purple' 
  },{
    name: 'Orange',
    value: 'orange' 
  }, {
    name: 'White',
    value: 'white' 
  }, {
    name: 'Black',
    value: 'black' 
  }];

  return (
    <div className="mx-auto mt-8 space-y-8">
      <h1 className="font-semibold text-2xl text-center">
        Background Selector
      </h1>
      <div
        className={`h-80 w-2/3 mx-auto ${
          color == "white" || color == "black"
            ? `bg-${color}`
            : `bg-${color}-500`
        } rounded-xl shadow-xl`}
      />
      <div className="h-20 w-2/3 mx-auto bg-slate-50 rounded-xl shadow-md">
        <div className="flex justify-between items-center h-full px-4">
          {colors.map((c, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-3xl ${
                c.value == "white" || c.value == "black"
                  ? `bg-${c.value}`
                  : `bg-${c.value}-500`
              } ${c.value == "black" && `text-white`} shadow-xl`}
              onClick={() => setColor(c.value)}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
