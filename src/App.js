import Todo from "./components/Todo"
import Form from "./components/Form"
import FilterButton from "./components/FilterButton";
import React, {useState} from "react";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id) {
    const updateTasks = tasks.map(task => {
      // if thistask has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completeted` prop has been inverted
        return{...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updateTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks.map(task => (
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  function addTask(name) {
    const newTask = {id: "todo-" + nanoid(), name: name, completed: false};
    setTasks([...tasks, newTask]);
  }

  const taskNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${taskNoun} remaining`;
  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask}/>
      {/* <h1>TodoMatic</h1> */}
     <div className="filters btn-group stack-exception">
        {/* TODO FilterButtonを入れる */}
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

// {}で囲まれているのはJSXが変数を認識する方法

// Appコンポーネントを別のモジュールで使用できるようにしている
export default App;
