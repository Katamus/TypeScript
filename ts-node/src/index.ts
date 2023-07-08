import { Pokemon } from "./decorators/pokemon-class";


const pokemon = new Pokemon("Charmander");

(Pokemon.prototype as any ).customName = 'Pikachu';

console.log(pokemon);
