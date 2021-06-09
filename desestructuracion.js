const deadpool = {
    nombre: 'wade',
    apellido:'Winston',
    poder:'regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

console.log(deadpool.getNombre());

///ejemplo de desestruc en arrays

const miarray = ['Juan','Pepe','Tito', 'Paco'];

const n1 = miarray[0]; //forma estructurada
const n2 = miarray[1];
const n3 = miarray[2];
const n4 = miarray[3];
console.log(n1, n2, n3, n4);

const [desest1,desest2,desest3,desest4] = miarray; //forma desestructurada
console.log(desest1,desest2,desest3,desest4);

