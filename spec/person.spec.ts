import { Person } from "../src/Person";
describe("Person", function () {
  it("default name is blank", function () {
    var person = new Person();
    expect(person.name).toBe("");
  });
  it("should behave...", () => {});
});
