// The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.

// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// The other three classes will extend `Employee`.

// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`

// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`

// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

const Employee = require("../lib/Employee");

describe("Employee class", () => {
  it("name", () => {

    expect(new Employee("?").visible).toBe(true);
  });
  
  it("id", () => {

    expect(new Employee("a").visible).toBe(false); 
  });

  it("email", () => {

    expect(new Employee("a").toString()).toBe("_");
  });

  it("getName", () => {

    expect(new Employee("?").toString()).toBe("?");
  });

  describe("guess", () => {
    it("Correct guess returns true", () => {

      expect(new Employee("j").guess("j")).toBe(true);
    });

    it("Incorrect guess returns false", () => {

      expect(new Employee("j").guess("l")).toBe(false);
    });
  });

  describe("getSolution", () => {
    it("returns character", () => {
      expect(new Employee("l").getSolution()).toBe("l");
    });
  });
});