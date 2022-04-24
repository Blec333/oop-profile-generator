
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.role = "Intern";// * `getRole();overridden to return `'Intern'`
        this.school = school;// * `school`
    }
    getSchool() {
        return this.school;// * `getSchool()`
    }
}
module.exports = Intern;