export const get = async( endpoint ) =>{
    const url = `${process.env.REACT_APP_API_URL}/api/${ endpoint }`;
    const resp = await fetch( url );
    const  data = await resp.json();

    return data;
}