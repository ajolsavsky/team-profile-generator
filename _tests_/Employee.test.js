const Employee = require('../lib/employee');

describe('employee', () => {
    describe('Initialization', () => {
        it("should create an object with a 'name' property set to the 'name' argument when called with the 'new' keyword",
        () => {
            const name = 'Benny';

            const obj = new Employee(name);

            expect(obj.name).toEqual(name);
        });

        it("should create an object with a 'id' property set to the 'id' argument when called with the 'new' keyword",
        () => {
            const name = 'Benny';
            const id = '1';

            const obj = new Employee(name, id);

            expect(obj.id).toEqual(id);
        });

        it("should create an object with a 'email' property set to the 'email' argument when called with the 'new' keyword",
        () => {
            const name = 'Benny';
            const id = '1';
            const email = 'name@gmail.com'

            const obj = new Employee(name, id, email);

            expect(obj.email).toEqual(email);
        });
    });
});