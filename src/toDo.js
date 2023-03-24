import React, { useState, useEffect } from "react";
import "./toDo.css";

const ToDoList = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));
    if (tareasGuardadas) {
      setTareas(tareasGuardadas);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (event) => {
    event.preventDefault();
    const nombreTarea = event.target.elements.nombreTarea.value;
    const descripcionTarea = event.target.elements.descripcionTarea.value;
    const categoriaTarea = event.target.elements.categoriaTarea.value;
    const ahora = new Date();
    const fechaTarea = ahora.toLocaleString();
    setTareas([
      ...tareas,
      {
        nombre: nombreTarea,
        descripcion: descripcionTarea,
        categoria: categoriaTarea,
        estado: "pendiente",
        fecha: fechaTarea,
      },
    ]);
    event.target.reset();
  };

  const actualizarEstadoTarea = (index, nuevoEstado) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].estado = nuevoEstado;
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const obtenerClaseCSSDeTarea = (tarea) => {
    let className = "tarea";
    switch (tarea.estado) {
      case "pendiente":
        className += " tarea-pendiente";
        break;
      case "en progreso":
        className += " tarea-en-progreso";
        break;
      case "en pausa":
        className += " tarea-en-pausa";
        break;
      case "resuelta":
        className += " tarea-resuelta";
        break;
      default:
        break;
    }
    return className;
  };

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <form className="formulario" onSubmit={agregarTarea}>
        <input
          type="text"
          name="nombreTarea"
          placeholder="Ingresa el nombre de la tarea"
        />
        <textarea
          name="descripcionTarea"
          placeholder="Ingresa la descripción de la tarea"
        ></textarea>
        <select name="categoriaTarea">
          <option value="simple">Simple</option>
          <option value="importante">Importante</option>
          <option value="muy importante">Muy importante</option>
        </select>
        <button type="submit">Agregar tarea</button>
      </form>
      <ul className="toDoList">
        {tareas.map((tarea, index) => (
          <li key={index} className={obtenerClaseCSSDeTarea(tarea)}>
            <div className="fecha">{tarea.fecha}</div>
            <div className="nombre">
              <strong>{tarea.nombre}</strong>
            </div>
            <div className="descripcion">{tarea.descripcion}</div>
            <div className="estado">{tarea.estado} </div>{" "}
            <div className="categoria">{tarea.categoria}</div>
            <select
              value={tarea.estado}
              onChange={(event) =>
                actualizarEstadoTarea(index, event.target.value)
              }
            >
              <option value="pendiente">Pendiente</option>
              <option value="en progreso">En progreso</option>
              <option value="en pausa">En pausa</option>
              <option value="resuelta">Resuelta</option>
            </select>
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
