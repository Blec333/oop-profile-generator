
class Employee {
    constructor(name, id, email, role, info) {
        this.name = name;// * `name`
        this.id = id;// * `id`
        this.email = email;// * `email`
        this.role = "Employee";
        this.info = info;
    }
    getName() {
        return this.name;// * `getName()`
    }
    getId() {
        return this.id;// * `getId()`
    }
    getEmail() {
        return this.email;// * `getEmail()`
    }
    getRole() {
        return this.role;// * `getRole()`;returns `'Employee'`
    }
    getInfo() {
        return this.info;
    }
}
  module.exports = Employee;