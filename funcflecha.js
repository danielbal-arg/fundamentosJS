//modo tradicional
function sumar(a,b){
    return a+b;
}

console.log(sumar(5,7));

//modo flecha
const sumarFlech = (a,b) => {
    return a+b;
}
console.log(sumarFlech(2,3));

//equivalente a :
const sumarFlech2 = (a,b) => a+b; //puedo omitir los corchetes y el return si es de una fila

console.log(sumarFlech2(6,3));