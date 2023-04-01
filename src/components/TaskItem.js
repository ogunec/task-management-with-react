import React, { useState } from 'react'
import TaskCreate from './TaskCreate'

function TaskItem({ task, onDelete, onUpdate }) {
    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = () => {
        onDelete(task.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit) //Bu sayede her tıklama sonrası true-false durumu değişecektir.
    }

    const handleSubmit = (id, title, description) => {
        setShowEdit(false)
        onUpdate(id, title, description)
    }

    console.log(task)
    return (

        <div className='task-item'>
            {showEdit ? <TaskCreate task={task} taskStatus={true} onUpdate={handleSubmit} /> : <div><h3 className='task-title'>Göreviniz</h3>
                <p>{task.title}</p>
                <h3 className='task-title'>Yapılacaklar</h3>
                <p>{task.taskDesc}</p>
                <div>
                    <button className='task-delete' onClick={handleDeleteClick}>Sil</button>
                    <button className='task-edit' onClick={handleEditClick}>Güncelle</button>
                </div></div>}
        </div>
    )
}

export default TaskItem