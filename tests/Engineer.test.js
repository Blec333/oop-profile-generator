
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
// * `name`
    it("name", () => {
        const name = 'John';// Arrange
        const obj = new Engineer(name);// Act
        expect(obj.name).toEqual(name);// Assert
    });

// * `id`
    it("id", () => {
        const id = '123';// Arrange
        const obj = new Engineer('', id);// Act
        expect(obj.id).toEqual(id);// Assert
    });

// * `email`
it("email", () => {
    const email = 'some@thing.com';// Arrange
    const obj = new Engineer('', '', email);// Act
    expect(obj.email).toEqual(email);// Assert
});

// * `github`
    it("github", () => {
        const github = 'github.address.com';// Arrange
        const obj = new Engineer('', '', '', github);// Act
        expect(obj.github).toEqual(github);// Assert
    });

// * `getName()`
    it("getName", () => {
        const name = 'John';// Arrange
        const obj = new Engineer(name);// Act
        expect(obj.getName()).toEqual(name);// Assert
    });

// * `getId()`
    it("getId", () => {
        const id = '123';// Arrange
        const obj = new Engineer('', id);// Act
        expect(obj.getId()).toEqual(id);// Assert
    });

// * `getEmail()`
    it("getEmail", () => {
        const email = 'some@thing.com';// Arrange
        const obj = new Engineer('', '', email);// Act
        expect(obj.getEmail()).toEqual(email);// Assert
    });

// * `getGithub()`
it("getGithub", () => {
    const github = 'github.address.com';// Arrange
    const obj = new Engineer('', '', '', github);// Act
    expect(obj.getGithub()).toEqual(github);// Assert
});

// * `getRole()` returns `'Engineer'`
    it("getRole", () => {
        const role = 'Engineer';// Arrange
        const obj = new Engineer();// Act
        expect(obj.getRole()).toEqual(role);// Assert
    });


// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.
});