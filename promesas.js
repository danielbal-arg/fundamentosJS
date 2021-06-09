const empleados = [
    {id:1, nombre:'Pedro'},{id:2, nombre:'Juan'},{id:3, nombre:'Daniel'}
];

const getEmpleado = (id) => {
    
        
        const promesa = new Promise((resolve,reject) =>{
            const trabajador = empleados.find(e => e.id === id)?.nombre

            if (trabajador){
             resolve (trabajador);
            } else {
             reject(`No existe el id ${id}`);
            }
        });
        return promesa;
}

const id = 4;

getEmpleado(id)
    .then(trabajador => console.log(trabajador))
    .catch(err => console.log(err));