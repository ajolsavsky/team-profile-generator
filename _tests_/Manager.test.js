const Manager = require('../lib/manager');

describe('manager', () => {
    describe('Initialization', () => {
        it("should create an object with a 'name' property set to the 'name' argument when called with the 'new' keyword",
        () => {
            const name = 'Jody';
            const obj = new Manager(name);
            expect(obj.name).toEqual(name);
        });

        it("should create an object with a 'id' property set to the 'id' argument when called with the 'new' keyword",
        () => {
            const name = 'Jody';
            const id = '80';
            const obj = new Manager(name, id);
            expect(obj.id).toEqual(id);
        });

        it("should create an object with a 'email' property set to the 'email' argument when called with the 'new' keyword",
        () => {
            const name = 'Jody';
            const id = '80';
            const email = 'name@gmail.com';
            const obj = new Manager(name, id, email);
            expect(obj.email).toEqual(email);
        });

        it("should create an object with a 'officeNumber' property set to the 'officeNumber' argument when called with the 'new' keyword",
        () => {
            const name = 'Jody';
            const id = '80';
            const email = 'name@gmail.com';
            const officeNumber = "5694"
            const obj = new Manager(name, id, email, officeNumber);
            expect(obj.officeNumber).toEqual(officeNumber);
        });


    });
});