import { useState } from "react";
import { addProduct } from "../helpers/addProduct"
import { Producto } from "../interfaces/producto.interface"




const postProducto = ( producto: Producto) =>{
 const { Nombre, SKU,calificacion, categorias_id,imagen, stock} = producto;

  addProduct({
    Nombre,
    SKU,
    calificacion,
    categorias_id,
    imagen,
    stock,
    _token: localStorage.getItem("csrf")
  })
}



export const AddProducto = () => {

  const [formData, setFormData] = useState<Producto>({
    Nombre: ""
    SKU: "",
    calificacion: "",
    categorias_id: "",
    imagen: "",
    stock: "",
    _token: localStorage.getItem("csrf")
  });

   // Maneja el envío del formulario
   const handleSubmit = (event: any) => {
    event.preventDefault(); 
    // postProducto( formData );
    console.log( formData)
   
    
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });

  };
  return (
    <>
      <h1>Añadir un nuevo producto</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="Nombre"
          value={formData.Nombre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
    </>
  )
}
