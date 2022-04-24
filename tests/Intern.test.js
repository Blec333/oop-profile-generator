
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern class", () => {
    // * `name`
    it("name", () => {
        const name = 'John';// Arrange
        const obj = new Intern(name);// Act
        expect(obj.name).toEqual(name);// Assert
    });

    // * `id`
    it("id", () => {
        const id = '123';// Arrange
        const obj = new Intern('', id);// Act
        expect(obj.id).toEqual(id);// Assert
    });

    // * `email`
    it("email", () => {
        const email = 'some@thing.com';// Arrange
        const obj = new Intern('', '', email);// Act
        expect(obj.email).toEqual(email);// Assert
    });

    // * `school`
    it("school", () => {
        const school = 'Bootcamp University';// Arrange
        const obj = new Intern('', '', '', school);// Act
        expect(obj.school).toEqual(school);// Assert
    });

    // * `getName()`
    it("getName", () => {
        const name = 'John';// Arrange
        const obj = new Intern(name);// Act
        expect(obj.getName()).toEqual(name);// Assert
    });

    // * `getId()`
    it("getID", () => {
        const id = '123';// Arrange
        const obj = new Intern('', id);// Act
        expect(obj.getID()).toEqual(id);// Assert
    });

    // * `getEmail()`
    it("getEmail", () => {
        const email = 'some@thing.com';// Arrange
        const obj = new Intern('', '', email);// Act
        expect(obj.getEmail()).toEqual(email);// Assert
    });

    // * `getSchool()`
    it("getSchool", () => {
        const school = 'Bootcamp University';// Arrange
        const obj = new Intern('', '', '', school);// Act
        expect(obj.getSchool()).toEqual(school);// Assert
    });

    // * `getRole()` returns `'Intern'`
    it("getRole", () => {
        const role = 'Intern';// Arrange
        const obj = new Intern();// Act
        expect(obj.getRole()).toEqual(role);// Assert
    });


// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
});