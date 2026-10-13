import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {Button, Card, CardHeader, CardContent, CardActions} from "@mui/material";

export default function Cliente({firstname, lastname, dni, address, id, onEliminar})
{
    const SwalReact = withReactContent(Swal);
    return (
        <Card variant="outlined" sx={{ marginBottom: 2 }}>
            <h2 style={{ color: '#000000' }}>
                {firstname} {lastname}
            </h2>
            <p>DNI:{dni}</p>
            <p>Direccion:{address}</p>
            <p>ID: {id}</p>
            <Button variant="contained" color="error" onClick={() =>{
                SwalReact.fire({
                    title: "¿Estás seguro?",
                    text: "No podrás revertir esto",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Sí, eliminarlo"
                }).then((result) => {
                    if (result.isConfirmed) {
                        onEliminar(id);
                        SwalReact.fire({
                            title: "Eliminado",
                            text: "El cliente ha sido eliminado",
                            icon: "success"
                        });
                    }
                });
            }}>
                Eliminar Cliente
            </Button>
        </Card>
    );

}