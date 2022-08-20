const personajes=['goku','vegeta','Trunks'];

const [,,p3]=personajes;
console.log(p3);

const retornaArreglo = ()=>{
    return['ABC',123];
}

const [letras,numero] = retornaArreglo();
console.log(letras,numero);


const useState= (valor)=>{
    return [valor,()=>{console.log("hola mundo")}]
}

const [nombre,setNombre]=useState("Jose Manuel");

console.log(nombre)
setNombre();