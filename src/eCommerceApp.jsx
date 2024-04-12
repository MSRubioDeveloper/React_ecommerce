import { useEffect } from "react";
import { AppRouter } from "./router/AppRouter"

export const ECommerce = () => {

  useEffect(() => {
    obtenerTokenCSRF();
  }, []);

  const obtenerTokenCSRF = async() => {

        try{
          const response = await fetch(`${process.env.REACT_APP_API_URL}/api/csrf-token`);
          const data = await response.json();
          
          const token = data.csrf_token;
       
          //localstorage token
          localStorage.setItem("csrf", "3VrrSDOXYAZIJ47Ulu73c5R95ciK9M4Zx7Hj3avE")
    
          console.log('Token CSRF obtenido:', token);
        }catch( error){
          console.log("Error al obtener el token" ,error)
        }
    
  };



  return (
    <>
        <AppRouter></AppRouter>
    </>
  )
}
