(()=>{

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        active: boolean;
        poder: number;
    }

    const avengers:Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        active: true,
        poder: 1500.123123
    }

    // const {poder,vision} = avengers;
    // console.log(poder.toFixed(2),vision.toLocaleLowerCase());

    const printAvenger= ({ironman, ...rest}:Avengers) => {
        console.log(avengers.vision,rest);
    }

    printAvenger(avengers);
    

})()