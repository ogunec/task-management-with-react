import { createContext } from "react";
import axios from 'axios';
import { useState } from 'react';


const TasksContext = createContext();

function Provider({ children }) {
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

    const sharedValuesAndMethods={
        id,
        tasks,
        createTask,
        fetchTasks,
        deteleTaskById,
        editTaskById

    }
    return (
        <TasksContext.Provider value={sharedValuesAndMethods}>
            {children}
        </TasksContext.Provider>
    )
}

export { Provider }
export default TasksContext;