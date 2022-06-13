const Intern = require('../lib/intern');

describe('intern', () => {
    describe('Initialization', () => {
        it("should create an object with 'name' property det to the 'name' argument when called with the 'new' keyword",
        () => {
            const name = 'Meegan';
            const obj = new Intern(name);
            expect(obj.name).toEqual(name);
        })

            it("should create an object with a 'id' property set to the 'id' argument when called with the 'new' keyword",
            () => {
                const name = 'Meegan';
                const id = '99';
                const obj = new Intern(name, id);
                expect(obj.id).toEqual(id);
            });
    
            it("should create an object with a 'email' property set to the 'email' argument when called with the 'new' keyword",
            () => {
                const name = 'Meegan';
                const id = '99';
                const email = 'name@gmail.com';
                const obj = new Intern(name, id, email);
                expect(obj.email).toEqual(email);
            });
    
            it("should create an object with a 'school' property set to the 'school' argument when called with the 'new' keyword",
            () => {
                const name = 'Meegan';
                const id = '99';
                const email = 'name@gmail.com';
                const school = "Roosevelt"
                const obj = new Intern(name, id, email, school);
                expect(obj.school).toEqual(school);
            });
    })
})