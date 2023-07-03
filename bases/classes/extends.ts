(()=>{
    class Avenger{
        constructor(
            public name:string,
            public realName : string
        ){
            console.log('Constructor Avenger llamado!');
            
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {

        constructor(
            public name:string,
            public realName : string,
            public isMutant:boolean
        ){
            super(name,realName);
        }

        getfullNameDesdeXmen(){
            console.log(super.getFullName());
            
        }

    }

    const wolverine = new Xmen('Wolverine','Logan',true);

    wolverine.getfullNameDesdeXmen();
    

})();