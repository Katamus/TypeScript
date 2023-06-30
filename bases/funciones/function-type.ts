(()=> {

    const addNumber = (a:number, b:number) => a + b;

    const greet = (name:string) => `Hola ${name}`;

    const saveTheWorld = () => `El mundo está salvado`;

    let myFuntcion:()=> string;

    // myFuntcion = 10;
    // console.log(myFuntcion);

    // myFuntcion = addNumber;
    // console.log(myFuntcion(1,2));
    
    // myFuntcion = greet;
    // console.log(myFuntcion('Christian'));

    myFuntcion = saveTheWorld;
    console.log(myFuntcion());
    

})();