
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, role) {
        super(name, id, email, role);
        this.role = "Engineer";// * `getRole();overridden to return `'Engineer'`
        this.github = github;// * `github`GitHub username
    }
    getGithub() {
        return this.github;// * `getGithub()`
    }
}

module.exports = Engineer;