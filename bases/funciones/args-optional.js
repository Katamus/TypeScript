"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '------'}`;
    };
    const nombre = fullName('Tony');
    console.log(nombre);
})();
