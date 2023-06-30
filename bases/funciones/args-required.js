"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    let noName;
    const nombre = fullName(noName, 'Stark');
    console.log(nombre);
})();
