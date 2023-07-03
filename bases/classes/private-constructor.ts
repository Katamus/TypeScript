(()=>{

    class Apocalipsis{

        static instance:Apocalipsis;

        private constructor( public name:string){

        }

        static callApocalipsis():Apocalipsis{
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Soy Apocalisis1... el unico');
            }
            return Apocalipsis.instance;
        }

        changeName():void{
            this.name = 'xavier';
        }

    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName();

    console.log({
        apocalipsis1,
        apocalipsis2,
        apocalipsis3
    });
    

})();