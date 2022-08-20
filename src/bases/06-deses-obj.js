const persona={
    nombre:"Tony",
    edad:45,
    clave:'ironman',
    rango:'solado'
};

const useContext=({nombre,edad,rango='capitan'}) =>{
    return(
        {
            nombreClave:clave,
            year:edad,
            lantlng:{
                lant:14.2323,
                lng:-12.3232
            }
        }
    );
}
const{nombreClave,year,lantlng:{lant,lng}}=useContext(persona);