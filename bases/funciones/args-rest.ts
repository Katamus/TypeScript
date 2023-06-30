(()=>{

    const fullName = (firstName:string, ...restArg:string[]) => {
        return `${firstName} ${restArg.join(" ")}`;
    }

    const superman = fullName('Clark','Joseph','Kent');
    console.log(superman);
    

})();