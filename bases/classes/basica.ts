(()=>{
    class Avenger {

        // private name: string;
        // private team:string;
        // public realName?:string;
        static avgAge: number = 35;

        constructor(
            private name:string,
            private team:string,
            public realName?:string){
        }
        
        public bio(){
            return `${this.name} (${this.team})!!!`;
        }

        static getAvgAge(){
            return this.avgAge;
        }

    }


    const antman = new Avenger('Antman','Capitan','Scott Lang');

    // console.log(antman);
    // console.log(antman.bio());
    // console.log(Avenger.getAvgAge());
    
    
})();