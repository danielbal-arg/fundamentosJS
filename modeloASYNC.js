//Ejemplo de promesa con async y try catch para captura de errores

//1-Defino funcion asincrona

const mifuncion = async(parametro) => {

        //capturo los errores con el equema try - catch
        try{
            //lo que sea que haga mi funcion
            return `salida ${parametro}`
        }catch(err){
            throw(err)
        }


}


mifuncion(1)
    .then(cualquiercosa =>console.log(cualquiercosa, 'SI!'))
    .catch(err=>console.log(err))