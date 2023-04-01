
import { useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {
  const [id, setId] = useState(0);
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks, {
        id: id,
        title: title,
        taskDesc: taskDesc
      }
    ]
    setTasks(createdTasks)
    setId(id + 1);
    console.log(createdTasks)
  }

  const deteleTaskById = (id) => {
    const currentTasks = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(currentTasks);
  }

  const editTaskById = (id, title, description) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id: id,
          title: title,
          taskDesc: description
        }
      }
      return task;
    });
    setTasks(updatedTasks)
  }

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deteleTaskById} onUpdate={editTaskById} />
    </div>
  );
}

export default App;
