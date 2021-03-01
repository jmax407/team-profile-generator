const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js');

test('create Intern object', () => {
    const school = "FAMU";
    const testPerson = new Intern('bob', 1, 'bob@gmail.com', school)
    expect(testPerson.school).toBe(school);
});