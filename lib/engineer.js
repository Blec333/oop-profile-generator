
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.role = "Engineer";// * `getRole();overridden to return `'Engineer'`
        this.github = github;// * `github`GitHub username
    }
    getName() {
        super.getName();
    }
    getId() {
        super.getId();
    }
    getEmail() {
        super.getEmail();
    }
    getRole() {
        super.getRole();
    }
    getGithub() {
        return this.github;// * `getGithub()`
    }
}
module.exports = Engineer;