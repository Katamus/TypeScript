"use strict";
(() => {
    // const numbers: (string|number|boolean)[] = [1,2,3,4,5,6];
    const numbers = [1, 2, 3, 4, 5, 6];
    const villian = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    numbers.push(11);
    villian.forEach(v => console.log(v.toUpperCase()));
    console.log(numbers);
})();
