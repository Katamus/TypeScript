
function printToConsole (construtor:Function){
    console.log(construtor);
    
}

@printToConsole
export class Pokemon {

    public publicApi:String = 'https://pokeapi.co';

    constructor(
        public name:string
    ){

    }
}