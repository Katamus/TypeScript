(()=>{

    abstract class Mutante {
        constructor(
            public name:string,
            public realName:string
        ){

        }

    }

    class Xmen extends Mutante{
        salvarElMundo(){
            return "El mundo fue salvado";
        }
    }

    class Villian extends Mutante{

        conquistarElMundo(){
            return "Mundo conquistado";
        }

    }
    
    const wolverine = new Xmen('Wolverine','Logan');
    const magneto = new Villian('Magneto','Magnus');

    //console.log(wolverine.salvarElMundo());
    //console.log(magneto.conquistarElMundo());


    const printName = (character:Mutante) =>{
        //console.log(character.realName);
    }

    printName(wolverine);
    printName(magneto);
    
})()