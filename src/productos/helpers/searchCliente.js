export const searchCliente = async( id ) =>{
    const url = `${process.env.REACT_APP_API_URL}/api/clientes/${ id }`;
    const resp = await fetch( url );
    const  data = await resp.json();

    return data;
}