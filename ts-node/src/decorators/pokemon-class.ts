
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

function CheckValidPokemn () {
    return function (target:any,propertyKey:string,descriptor:PropertyDescriptor) {
        const originalMethod = descriptor.value;
        //descriptor.value = () => console.log('Hola mundo');
        descriptor.value = (id:number) => {
            if(id < 1 || id > 800){
                return console.error('El id del pokemon debe de estar entre 1 y 800');
            }else{
                return originalMethod(id);
            }
        }
        

        console.log({target,propertyKey,descriptor});
    }
}



@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {

    public publicApi:String = 'https://pokeapi.co';

    constructor(
        public name:string
    ){

    }

    @CheckValidPokemn()
    savePokemonToDB (id: number) {
        console.log(`Pokemen guardado en DB ${id}`);
        
    }
}