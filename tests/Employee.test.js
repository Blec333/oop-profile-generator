
// The first class is an `Employee` parent class with the following properties and methods:

const Employee = require("../lib/Employee");

describe("Employee class", () => {
// * `name`
    it("name", () => {
        const name = 'John';// Arrange
        const obj = new Employee(name);// Act
        expect(obj.name).toEqual(name);// Assert
    });

// * `id`
    it("id", () => {
        const id = '123';// Arrange
        const obj = new Employee(id);// Act
        expect(obj.id).toEqual(id);// Assert
    });

// * `email`
    it("email", () => {
        const email = 'some@thing.com';// Arrange
        const obj = new Employee(email);// Act
        expect(obj.email).toEqual(email);// Assert
    });

// * `getName()`
    it("getName", () => {
        const name = 'John';// Arrange
        const obj = new Employee(name);// Act
        expect(getName()).toEqual(name);// Assert
    });

// * `getId()`
    it("getID", () => {
        const id = '123';// Arrange
        const obj = new Employee(id);// Act
        expect(getID()).toEqual(id);// Assert
    });

// * `getEmail()`
    it("getEmail", () => {
        const email = 'some@thing.com';// Arrange
        const obj = new Employee(email);// Act
        expect(getEmail()).toEqual(email);// Assert
    });

// * `getRole()` returns `'Employee'`
    it("getRole", () => {
        const role = 'Employee';// Arrange
        const obj = new Employee(role);// Act
        expect(getEmail()).toEqual(role);// Assert
    });


// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
});