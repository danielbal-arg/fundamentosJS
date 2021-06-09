console.log('Inicio de programa');

setTimeout((a)=>{
    console.log('Primer timeout');
},3000);

setTimeout((b)=>{
    console.log('Segundo timeout');
},0);

    
setTimeout((c)=>{
    console.log('Tercer timeout');
},0);
        

console.log('Fin de programa');