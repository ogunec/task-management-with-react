
import { useContext, useEffect } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import TasksContext from './context/task';


function App() {
  const { fetchTasks } = useContext(TasksContext)

  useEffect(() => {
    fetchTasks()
  },[])

  

  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;
