const Engineer = require('../lib/engineer');

describe('engineer', () => {
    describe('Initialization', () => {
        it("should create an object with 'name' property det to the 'name' argument when called with the 'new' keyword",
        () => {
            const name = 'Georgie';
            const obj = new Engineer(name);
            expect(obj.name).toEqual(name);
        })

            it("should create an object with a 'id' property set to the 'id' argument when called with the 'new' keyword",
            () => {
                const name = 'Georgie';
                const id = '22';
                const obj = new Engineer(name, id);
                expect(obj.id).toEqual(id);
            });
    
            it("should create an object with a 'email' property set to the 'email' argument when called with the 'new' keyword",
            () => {
                const name = 'Georgie';
                const id = '22';
                const email = 'name@gmail.com';
                const obj = new Engineer(name, id, email);
                expect(obj.email).toEqual(email);
            });
    
            it("should create an object with a 'github' property set to the 'github' argument when called with the 'new' keyword",
            () => {
                const name = 'Georgie';
                const id = '22';
                const email = 'name@gmail.com';
                const github = "georgieporgie"
                const obj = new Engineer(name, id, email, github);
                expect(obj.github).toEqual(github);
            });
    })
})