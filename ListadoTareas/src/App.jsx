import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './App.css';

function App() {
  const tareasGuardadas = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(tareasGuardadas);

  const maxId = Math.max(...tasks.map((task) => task.id), 0);
  const [contadorTaskid, contadorTaskID] = useState(maxId);

  const completarTarea = (taskId) => {
    const tareasActualizadas = tasks.map((task) =>
      task.id === taskId ? { ...task, completado: !task.completado } : task
    );
    setTasks(tareasActualizadas);
    actualizarLocalStorage(tareasActualizadas);
  };

  const eliminarTarea = (taskId) => {
    const tareasActualizadas = tasks.filter((task) => task.id !== taskId);
    setTasks(tareasActualizadas);
    actualizarLocalStorage(tareasActualizadas);
    console.log('La tarea fue borrada');
  };

  const agregarTarea = (taskName) => {
    const newTask = {
      id: contadorTaskid + 1,
      name: taskName,
      completado: false,
    };

    setTasks([...tasks, newTask]);
    contadorTaskID((prevCounter) => prevCounter + 1);
    actualizarLocalStorage([...tasks, newTask]);
    console.log('Se agrego una tarea', tasks);
  };

  const limpiarTareas = () => {
    const confirmDelete = window.confirm('¿Estás seguro de borrar todas las tareas?');

    if (confirmDelete) {
      setTasks([]);
      contadorTaskID(0);
      localStorage.removeItem('tasks');
      console.log('Todas las tareas han sido eliminadas.');
    }
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const actualizarLocalStorage = (tareasActualizadas) => {
    localStorage.setItem('tasks', JSON.stringify(tareasActualizadas));
  };

  return (
    <div className="App">
      <h1>Mis tareas pendientes</h1>
      <TaskForm enAgregarTarea={agregarTarea} />
      <button onClick={limpiarTareas}>Eliminar Todas las Tareas</button>
      <h2>Tareas:</h2>
      <TaskList tasks={tasks} enCompletarTarea={completarTarea} enBorrarTarea={eliminarTarea} />
    </div>
  );
}

export default App;
