const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

test('create Engineer object', () => {
    const testHub = "testHub";
    const testPerson = new Engineer('bob', 1, 'bob@gmail.com', testHub)
    expect(testPerson.github).toBe(testHub);
});