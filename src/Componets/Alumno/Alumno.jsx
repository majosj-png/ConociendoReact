import {useState} from "react";
import imagen from "../../assets/alumno.png";


export default function Alumno({alumno, curso}) {
    const[nombre,setNombre]=useState(alumno);
    const[mostrarImagen, setMostrarImagen]=useState(true);
    const anio = new Date().getFullYear();
  return (
    <>
        <center>
            <h1>Nombre: {nombre}</h1>
            <h2>Curso: {curso}</h2>
            <h2>Año: {anio}</h2>
            <h2>Edad: {anio-1983}</h2>
            {mostrarImagen && <img src={imagen} width="170" height="170" alt="Alumno" />}
            <br />
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" id="nombre" name="nombre" 
            value={nombre} onChange={(evento) => setNombre(evento.target.value)} />
            <br />
            
            <label htmlFor="mostrarImagen">Mostrar Imagen:</label>
            <input type="checkbox" id="mostrarImagen" name="mostrarImagen" checked={mostrarImagen}
            onChange={(evento) => setMostrarImagen(evento.target.checked)}
            />
            <br />
            <h2>Ir a mi github</h2>
            <a href="https://github.com/majosj-png" target="_blank"
             rel="noopener noreferrer"> SueñosDeAmor
            </a>
        </center>
        <hr />
    </>
  )
}