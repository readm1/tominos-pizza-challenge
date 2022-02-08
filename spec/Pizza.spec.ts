import { Pizza } from "../src/Pizza";
describe("Pizza", function () {
  it("default name is blank", function () {
    const pizza = new Pizza();
    expect(pizza.name).toBe("");
  });
  it("default category is blank", function () {
    const pizza = new Pizza();
    expect(pizza.category).toBe("");
  });
  it("default price is 0", function () {
    const pizza = new Pizza();
    expect(pizza.price).toBe(0);
  });
});
