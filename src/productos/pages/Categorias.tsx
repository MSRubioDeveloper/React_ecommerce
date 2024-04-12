import React, { useEffect } from "react";
import CustomizedTables from "../components/Table"
import { get } from "../helpers/get";

export const Categorias = () => {

  const [ categorias, setCategorias ]= React.useState([   ]);

  useEffect( ()=>{
    get( "categorias" )
      .then ( categorias => setCategorias(categorias)) 
  }, [] )


    return (
      
      <CustomizedTables  categorias={ categorias }></CustomizedTables>
    )
  }
  