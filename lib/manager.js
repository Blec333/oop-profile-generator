
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role) {
        super(name, id, email, role);
        this.role = "Manager";// * `getRole();overridden to return `'Manager'`
        this.officeNumber = officeNumber;// * `officeNumber`
    }
}
module.exports = Manager;