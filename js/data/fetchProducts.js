// aca se hace el fetch a la api de productos
// se exporta la funcion fetchProducts que devuelve una promesa con un array de productos
// se usa en main.js para cargar y renderizar los productos al iniciar la app

const fetchProducts = async (endpoint) => {
  try {
    if (endpoint == null || endpoint == "") {
      throw new Error('Debe indicar un endpoint en la petición')
    } else {

      let response = await fetch(endpoint)

      if (200 <= response.status < 300 ) {
        return await response.json()
      } else {
        throw new Error(`Error fP.L17. estado de respuesta: ${response.status}`);
      }
    }  

  } catch (error) {
    console.error(error.message)
    return [] // devuelvo un array vacio para no romper el index si falla la api
  }
};

export default fetchProducts;