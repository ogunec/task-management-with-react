
import { useEffect, useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import axios from 'axios';

function App() {
  const [id, setId] = useState(0);
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {

    const response = await axios.post('http://localhost:3004/tasks', {
      title: title,
      taskDesc: taskDesc,
    });
    console.log(response);
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

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3004/tasks');
    setTasks(response.data);
  }

  useEffect(() => {
    fetchTasks();
  },[])

  const deteleTaskById = async (id) => {
    await axios.delete(`http://localhost:3004/tasks/${id}`);
    const currentTasks = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(currentTasks);
  }

  const editTaskById = async (id, title, description) => {
    await axios.put(`http://localhost:3004/tasks/${id}`, {
      title: title,
      taskDesc: description,
    });
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
