import { useEffect } from "react";
import ProductCard from "../components/ProductCard"
import { get } from "../helpers/get"
import React from "react";





export const ProductosPage = () => {

  const [ productos, setProductos ]= React.useState([   ]);

  useEffect( ()=>{
    get( "productos" )
      .then ( productos => setProductos(productos)) 
  }, [] )

  return (
    <>
       <ProductCard productos={productos} ></ProductCard>
    </>
  )
}
