import {getHeroeById} from'08-imp-exp'
// const promesa = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const heroes=getHeroeById(2);
//        resolve(heroes)
//     },2000);
// });
// promesa.then((heroe)=>{
//     console.log('heroes',heroe)
// })

const getHeroeByIdAsync =(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const p1 = getHeroeById(id);
            (p1 != undefined) ? resolve(p1) : reject('no se puedo enontrar el heroe')
        },2000)
    });
}

getHeroeByIdAsync(10).then((heroe)=>{
    console.log(heroe)
}).catch(erro=>{
    console.warn(erro)
})