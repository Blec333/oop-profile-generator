
class Employee {
    constructor(name, id, email) {
        this.name = name;// * `name`
        this.id = id;// * `id`
        this.email = email;// * `email`
        this.role = "Employee";
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
}
  module.exports = Employee;