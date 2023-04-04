import React, { useContext, useState } from 'react'
import "../App.css"
import TasksContext from '../context/task'


function TaskCreate({ task, taskStatus, onUpdate }) {
    const {createTask, editTaskById} = useContext(TasksContext)
    const [title, setTitle] = useState(task ? task.title : "")
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "")
    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(taskStatus){
            onUpdate(task.id, title, taskDesc)
        }
        else{
            createTask(title, taskDesc)
        }
    }

    
    return (
        <div>
            {taskStatus ? <div className='task-update'>
                <h3>Lütfen Taskı Daüzenleyiniz!</h3>
                <form className='task-form'>
                    <label className='task-label'>Başlığı Düzenleyiniz</label>
                    <input value={title} onChange={handleChange} className='task-input' />
                    <label className='task-label'>Taskı Düzenleyiniz</label>
                    <textarea value={taskDesc} onChange={handleTaskChange} className='task-input' rows={5} />
                    <button onClick={handleSubmit} className='task-button update-button'>Düzenle</button>
                </form>
            </div> : <div className='task-create'> 
                <h3>Lütfen Task Ekleyiniz!</h3>
                <form className='task-form'>
                    <label className='task-label'>Başlık</label>
                    <input value={title} onChange={handleChange} className='task-input' />
                    <label className='task-label'>Task Giriniz!</label>
                    <textarea value={taskDesc} onChange={handleTaskChange} className='task-input' rows={5} />
                    <button onClick={handleSubmit} className='task-button'>Oluştur</button>
                </form>
            </div>}
        </div>

    )
}

export default TaskCreate