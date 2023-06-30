(()=>{

    const fullName = (firstName:string, lastName:string): string =>{
        return `${firstName} ${lastName}`;
    }

    let noName:any;

    const nombre = fullName(noName,'Stark');

    console.log(nombre);
    
})();