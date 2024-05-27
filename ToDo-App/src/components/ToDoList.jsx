import { useState } from "react";

export default function ToDoList() {
  const [task, setTask] = useState(JSON.parse(localStorage.getItem("task")) || []);
  const [newTask, setNewTask] = useState("");

  const addnewTask = (e) => {
    
    e.preventDefault(); // Prevent form submission
    if(newTask.length > 0){
      setTask([...task, newTask]);
      localStorage.setItem("task", JSON.stringify([...task, newTask]));
    }
    else{
      alert("Please enter a task"); 
    }

    setNewTask(""); // Clear the input field after adding the task
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setNewTask(e.target.value);
  };

  const deleteTask = (index) => {
    const newTask = task.filter((todo, i) => i !== index);
    localStorage.setItem("task", JSON.stringify(newTask));
    setTask(newTask);
  };

  return (
    <div className="parent">
      <h1>To Do App</h1>
      <form onSubmit={addnewTask}>
        {" "}
        {/* Use onSubmit here */}
        <input
          className="input"
          type="text"
          placeholder="Add a task"
          value={newTask}
          onChange={handleChange}
        />
        <button className="add" type="submit">
          Add
        </button>
      </form>
      <br />
      <br />
      <hr />
      <div className="taskList">
        <h2>Your tasks</h2>
        <ul className="list">
          {task.length > 0 ? (
            task.map((todo, index) =>
                (
                 <li className="listItem" key={index}>
                   {todo}{" "}
                   <i
                     className="fa-solid fa-x"
                     onClick={() => deleteTask(index)}
                     x
                   ></i>{" "}
                 </li>
               ) 
             )
          ) : (
            <li className="listItem">No tasks</li>
          )}
          
        </ul>
      </div>
    </div>
  );
}
