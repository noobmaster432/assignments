import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    setTodo([...todo, {title, desc}]);
    setDesc('');
    setTitle('');
  }

  const handleDelete = (i) => {
    const newTodo = [...todo];
    newTodo.splice(i, 1);
    setTodo(newTodo);
  }

  return (
    <>
      <h1>Todo Application</h1>
      <div className="card">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <br />
        <br />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className="card">
        {todo.map((todo, i) => (
          <div key={i}>
            <span style={{ fontSize: 24, marginRight: 10 }}>
              {todo.title} <span style={{ fontSize: 16 }}>: {todo.desc}</span>
            </span>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App
