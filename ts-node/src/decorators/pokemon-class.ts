
function printToConsole (construtor:Function){
    console.log(construtor);
}

const printToConsoleConditional = (print:boolean = false):Function => {

    if(print){
        return ()=> console.log('Hola Mundo');
    }else{
        return ()=> {};
    }
    
}

const bloquearPrototipo = function (constructor:Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {

    public publicApi:String = 'https://pokeapi.co';

    constructor(
        public name:string
    ){

    }
}