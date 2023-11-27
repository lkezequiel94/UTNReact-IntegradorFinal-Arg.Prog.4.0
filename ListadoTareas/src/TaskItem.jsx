import React, { useState, useEffect } from 'react';
import { FaTrash, FaCheck } from 'react-icons/fa';
import './App.css';

function TaskItem({ task, completar, borrar }) {
  const [completado, ponerCompletado] = useState(task.completado);

  useEffect(() => {
    ponerCompletado(task.completado);
  }, [task.completado]);

  const checkCompletar = () => {
    completar();
    ponerCompletado(!completado);
    console.log('Se completo la tarea:', task);
  };

  return (
    <li className="TaskItem" style={{ textDecoration: completado ? 'line-through' : 'none' }}>
      {completado ? null : <FaCheck onClick={checkCompletar} id="Check" />}
      <div>
        <span>{task.name}</span>
      </div>
      {' '}
      <FaTrash onClick={borrar} />
    </li>
  );
}

export default TaskItem;
