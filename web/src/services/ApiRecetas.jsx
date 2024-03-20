// login

const getRecipesFromApi = (params) => {
    console.log(params);
    // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
    return fetch("//localhost:4000/api/recetas")
      .then((response) => response.json())
      .then((data) => {
        // CAMBIA EL CONTENIDO DE ESTE THEN PARA GESTIONAR LA RESPUESTA DEL SERVIDOR Y RETORNAR AL COMPONENTE APP LO QUE NECESITA
  
        return data;
      });
  };
  
  const objToExport = {
    getRecipesFromApi: getRecipesFromApi,
  };
  
  export default objToExport;