"use strict";
(() => {
    const batman = 'Batman';
    const linternaVerde = "Linterna's Verde";
    const volcanNegro = `Héro: Volcan Negro`;

    console.log(`i'm ${batman}`);

    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() || 'No está presente');

})();
