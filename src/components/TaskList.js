import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks, onDelete, onUpdate}) {
  return (
    <div className='task-list'>
      {tasks.map((task, index) => {
        return <TaskItem key={index} task={task} onDelete={onDelete} onUpdate={onUpdate}/>
      })}
    </div>
  )
}

export default TaskList