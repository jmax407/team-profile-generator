const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

test('create Manager object', () => {
    const officeNumber = 50;
    const testPerson = new Manager('bob', 1, 'bob@gmail.com', officeNumber)
    expect(testPerson.officeNumber).toBe(officeNumber);
});