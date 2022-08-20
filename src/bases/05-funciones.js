const saludar2=(nombre)=>{
    return `hola ${nombre}`;
}

const saludar3=(nombre)=>(`hola ${nombre}`);
const saludar4=()=>`holas mundo`;
const usuarioActivo=(nombre)=>({uid:'ABC567',username:nombre})

console.log(usuarioActivo("Jose Manuel"));