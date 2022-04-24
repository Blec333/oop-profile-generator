
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager class", () => {
    // * `name`
    it("name", () => {
        const name = 'John';// Arrange
        const obj = new Manager(name);// Act
        expect(obj.name).toEqual(name);// Assert
    });

    // * `id`
    it("id", () => {
        const id = '123';// Arrange
        const obj = new Manager('', id);// Act
        expect(obj.id).toEqual(id);// Assert
    });

    // * `email`
    it("email", () => {
        const email = 'some@thing.com';// Arrange
        const obj = new Manager('', '', email);// Act
        expect(obj.email).toEqual(email);// Assert
    });

    // * `officeNumber`
    it("officeNumber", () => {
        const officeNumber = '(098) 123 - 4567';// Arrange
        const obj = new Manager('', '', '', officeNumber);// Act
        expect(obj.officeNumber).toEqual(officeNumber);// Assert
    });

    // * `getName()`
    it("getName", () => {
        const name = 'John';// Arrange
        const obj = new Manager(name);// Act
        expect(obj.getName()).toEqual(name);// Assert
    });

    // * `getId()`
    it("getId", () => {
        const id = '123';// Arrange
        const obj = new Manager('', id);// Act
        expect(obj.getId()).toEqual(id);// Assert
    });

    // * `getEmail()`
    it("getEmail", () => {
        const email = 'some@thing.com';// Arrange
        const obj = new Manager('', '', email);// Act
        expect(obj.getEmail()).toEqual(email);// Assert
    });


    // * `getRole()` returns `'Manager'`
    it("getRole", () => {
        const role = 'Manager';// Arrange
        const obj = new Manager();// Act
        expect(obj.getRole()).toEqual(role);// Assert
    });


// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
});