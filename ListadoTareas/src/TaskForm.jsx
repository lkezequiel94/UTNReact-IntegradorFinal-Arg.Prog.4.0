import React, { useState } from 'react';

function TaskForm({ enAgregarTarea }) {
  const [taskName, nombreTarea] = useState('');

  const CambioEstadoTarea = (event) => {
    nombreTarea(event.target.value);
  };

  const agregarTarea = () => {
    if (taskName.trim() !== '') {
      enAgregarTarea(taskName);
      nombreTarea('');
    } else {
      alert('Por favor, ingresa el nombre de la tarea.');
    }
  };

  return (
    <div>
      <label>
        Nueva Tarea:
        <input type="text" value={taskName} onChange={CambioEstadoTarea} />
      </label>
      <button onClick={agregarTarea}>Agregar Tarea</button>
    </div>
  );
}

export default TaskForm;