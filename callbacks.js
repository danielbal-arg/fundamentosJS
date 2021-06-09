const getUsuarioById = (id, callback) => {
    const usuario = {id, nombre: 'Daniel'}

    setTimeout(() =>{
        callback(usuario)},1500)

}

getUsuarioById(10, (cualquiercosa) => {
console.log(cualquiercosa.id);
console.log(cualquiercosa.nombre.toUpperCase());
});

