(()=>{

    const fullName = (firstName:string, lastName?:string, upper:boolean = false): string =>{
        if(upper) {
            return `${firstName} ${lastName || '---' }`.toUpperCase();
        }else {
            return `${firstName} ${lastName || '---' }`;
        }
    }

    

    const nombre = fullName('Tony','Stark',true);

    console.log(nombre);
    
})();