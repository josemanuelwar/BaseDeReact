import {heroes} from '../data/heroes'

export const getHeroeById=(id)=>{
    return heroes.find(element => element.id == id);
}
//console.log(getHeroeById(5));

export const getHeroesByOwener=(owner)=> heroes.filter(heroes => heroes.owner == owner);

//console.log(getHeroesByOwener('DC'))