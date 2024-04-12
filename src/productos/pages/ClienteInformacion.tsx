import React, { useEffect } from "react";
import { useParams } from "react-router";
import { searchCliente } from "../helpers/searchCliente";
import "./ClienteInformacion.css"
import { ClientesResponse } from "../interfaces/clientes-response.interface";


export const ClienteInformacion = () => {
    const { id } = useParams();

      
  const [ clientes, setClientes ]= React.useState<ClientesResponse>();
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect( ()=>{
    searchCliente(  id )
      .then ( cliente => {
        setLoading(false)
        setClientes(cliente)
      }) 
  }, [] )

  return (
    <>
    
            {!loading && clientes ? (
                <>     
                    <h1>Informacion del cliente : { clientes?.Nombre }</h1>
                    <div id="container-client">
                    <div id="client-img">
                        <img id="client-image" src="https://i.stack.imgur.com/l60Hf.png" alt="User_img" />
        
                    </div>
                      <div id="client-information">
                          <ul id="inf-cliente-ul">
                            <li>ID: {clientes.id}</li>
                            <li>Email: {clientes.Email}</li>
                            <li>Nombre: {clientes.Nombre}</li>
                            <li>Password: {clientes.Password}</li>
                            <li>Telefono: {clientes.Telefono}</li>
                            <li> Fecha de creacion: {clientes.created_at}</li>
                            <li>Fecha de Actualziacion: {clientes.updated_at}</li>
                          </ul>
                      </div>
                    </div>
                
                </>
            
            ) : (
                <h1>Cliente No encontrado</h1>
            )}
    </>
  )
}
