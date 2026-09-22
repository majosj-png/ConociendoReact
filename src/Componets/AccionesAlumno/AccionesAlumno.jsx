import  { useState } from "react";

export default function AccionesAlumno() {
    const mostrarAlertaAlumno = () => {
        console.log("Alumno: Majo Longoni");
    };
    const mostrarAlertaEditar = () => {
        console.log("Editar Alumno: Majo Longoni");
    }
    const mostrarAlertaEliminar = () => {
        console.log("Eliminar Alumno: Majo Longoni");
    };
    
    const[mostrarAcciones, setMostrarAcciones]=useState(true);
    
  return (
    <>
        <br/>
        <label htmlFor="mostrarAcciones">Mostrar Acciones:</label>
        <input type="checkbox" id="mostrarAcciones" name="mostrarAcciones" checked={mostrarAcciones}
        onChange={(evento) => setMostrarAcciones(evento.target.checked)}
        />
        {mostrarAcciones && <h1>Acciones del Alumno</h1>}
        <button onClick={mostrarAlertaAlumno}>Ver alumno</button>
        <br />
        <button onClick={mostrarAlertaEditar}>Editar alumno</button>
        <br />
        <button onClick={mostrarAlertaEliminar}>Eliminar alumno</button>
    </>
);
}