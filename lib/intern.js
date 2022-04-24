
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, role) {
        super(name, id, email, role);
        this.role = "Intern";// * `getRole();overridden to return `'Intern'`
        this.school = school;// * `school`
    }
    getSchool() {
        return this.school;// * `getSchool()`
    }
}
module.exports = Intern;