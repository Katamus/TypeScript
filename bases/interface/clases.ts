(()=>{

    interface Xmen {
        name:string;
        realName: String;
        mutanPower(id:number):string;
    }

    interface Human {
        age:number;
    }


    class Mutant implements Xmen,Human {

        public name:string;
        public realName: String;
        public age:number;

        constructor(
            name: string,
            realName: String,
            age: number
        ){
            this.age = age;
            this.realName =realName;
            this.name = name;
        }
       

        
        mutanPower(id: number): string {
            return this.name+' '+this.realName;
        }

    }

})()