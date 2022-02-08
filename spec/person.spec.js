"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("../src/Person");
describe("Person", function () {
    it("default name is blank", function () {
        var person = new Person_1.Person();
        expect(person.name).toBe("");
    });
    it("should behave...", () => { });
});
