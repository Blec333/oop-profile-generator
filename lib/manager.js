
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.role = "Manager";// * `getRole();overridden to return `'Manager'`
        this.officeNumber = officeNumber;// * `officeNumber`
    }
}
module.exports = Manager;