(()=>{
    let avengers: any = 123;
    let exists;
    let power;

    avengers = 'Dr Stranger';
    // console.log(  avengers.charAt(0));
    console.log(  (avengers as string).charAt(0) );
    
    avengers = 150.23256415;
    console.log((<number> avengers).toFixed(2));
    
    console.log(exists);
    console.log(power);
    
})();