
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor() {
        super(name, id, email, role);
        this.role = "Engineer";// * `getRole();overridden to return `'Engineer'`
        this.github = github;// * `github`GitHub username
    }
    getGithub() {
        return this.github;// * `getGithub()`
    }
}
