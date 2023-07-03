"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    const client = {
        name: 'Christian',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 120,
            zip: 'KY2 SUD',
            city: 'Toronto'
        }
    };
})();
//# sourceMappingURL=main.js.map