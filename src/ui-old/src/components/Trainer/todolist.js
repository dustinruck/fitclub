import "./App.css";
import { useRef, useState } from "react";

function todoList(){
    const [todos, setTodos] = useState([]);
  const setref = useRef();

  const handleToDo = () => {
    const text = setref.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    setref.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos)
  }

  return(
    <div className="App">
      <h2>To Do List</h2>
      <div className="to-do-container">
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div className="item">
                <li
                  className={completed ? "done" : ""}
                  key={index}
                  onClick={() => handleItemDone(index)}
                >
                  {text}
                </li>
                <span onClick={() => handleDeleteItem(index)} className="trash">
                  ❌
                </span>
              </div>
            );
          })}
        </ul>
        <input ref={setref} placeholder="enter task" />
        <button onClick={handleToDo}>Add</button>
      </div>
      
    </div>

  );
}
export default todoList;