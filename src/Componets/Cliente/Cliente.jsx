export default function Cliente({firstname, lastname, dni, address, id, onEliminar})
{
   
    return (
        <div>
            <h2>
                {firstname} {lastname}
            </h2>
            <p>DNI:{dni}</p>
            <p>Direccion:{address}</p>
            <button onClick={() =>{
                oneliminarCliente(id);
            }}>Eliminar Cliente</button>
        </div>
    );

}