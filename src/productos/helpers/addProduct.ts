import { Producto } from "../interfaces/producto.interface";

export const addProduct = async( product: Producto ) =>{
    const url = `${process.env.REACT_APP_API_URL}/api/AddProducto`;

    const resp = await fetch( url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( product )
    });
    const  data = await resp.json();

    return data;
}