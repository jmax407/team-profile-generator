const Employee = require('../lib/Employee.js');

test('check to see if employee object is created', () => {
    const testPerson = new Employee('bob', 1, 'bob@gmail.com')
    expect(testPerson).toBe(testPerson);
});