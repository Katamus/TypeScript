"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '---'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '---'}`;
        }
    };
    const nombre = fullName('Tony', 'Stark', true);
    console.log(nombre);
})();
//# sourceMappingURL=args-default.js.map