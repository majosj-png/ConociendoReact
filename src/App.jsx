import Titulo from "./Componets/Titulo/Titulo.jsx";
import TodoCounter from "./Componets/TodoCounter/TodoCounter.jsx";
import Alumno from "./Componets/Alumno/Alumno.jsx";
import AccionesAlumnos from "./Componets/AccionesAlumno/AccionesAlumno.jsx";
import Contador from "./Componets/Contador/Contador.jsx";
import ClienteList from "./Componets/ClienteList/ClienteList.jsx";

export default function App() {
  return (
    <>
      <Titulo texto="Creando mi primera app en Reacttt" />
      <TodoCounter totalTodos={5} completedTodos={2} />

      <Alumno alumno="Majo" curso="2do año" />
      <Boton accion= {Saludo}/>
      <AccionesAlumnos />
      <Contador />
      <ClienteList />
    </>
  )
}

function Saludo() {
  alert("Hola, soy Majo y estoy aprendiendo React");
}

function Boton({accion}){
  return <button onClick={accion}>Mostrar saludo</button>
}