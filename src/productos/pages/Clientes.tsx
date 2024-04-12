import React, { useEffect } from "react";
import { get } from "../helpers/get";
import CustomizedTables from "../components/Table";
import CustomizedTablesClients from "../components/TableClients";

export const Clientes = () => {
  
  const [ clientes, setClientes ]= React.useState([   ]);

  useEffect( ()=>{
    get( "clientes" )
      .then ( clientes => setClientes(clientes)) 
  }, [] )

    return (
      <>  
        <h1>Clientes</h1>
        <p>Lista de todos los clientes actualmente registrados en la aplicacion</p>

        <CustomizedTablesClients clientes={ clientes } ></CustomizedTablesClients>
      </>
    )
  }
  