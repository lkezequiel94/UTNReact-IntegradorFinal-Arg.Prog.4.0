import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, enCompletarTarea, enBorrarTarea }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          completar={() => enCompletarTarea(task.id)}
          borrar={() => enBorrarTarea(task.id)}
        />
      ))}
    </ul>
  );
}

export default TaskList;