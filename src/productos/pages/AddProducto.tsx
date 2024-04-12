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
    Nombre: "",
    SKU: "",
    calificacion: 0,
    categorias_id: 1,
    imagen: "",
    stock: 176,
    _token: localStorage.getItem("csrf")
  });

   // Maneja el envío del formulario
   const handleSubmit = (event: any) => {
    event.preventDefault(); 
    console.log( formData)
    const data = {
      ...formData
    }
    const productRespone =  postProducto( data );

    console.log( productRespone)

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
        <label htmlFor="SKU">SKU:</label>
        <input
          type="text"
          id="SKU"
          name="SKU"
          value={formData.SKU}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="calificacion">Calificacion:</label>
        <input
          type="text"
          id="calificacion"
          name="calificacion"
          value={formData.calificacion}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="categorias_id">Categoria ID:</label>
        <input
          type="text"
          id="categorias_id"
          name="categorias_id"
          value={formData.categorias_id}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="imagen">imagen:</label>
        <input
          type="text"
          id="imagen"
          name="imagen"
          value={formData.imagen}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="stock">stock:</label>
        <input
          type="text"
          id="stock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
        />
      </div>


      <button type="submit">Enviar</button>
    </form>
    </>
  )
}
