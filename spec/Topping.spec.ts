import { Topping } from "../src/Topping";
describe("Topping", function () {
  it("default name is blank", function () {
    const topping = new Topping();
    expect(topping.name).toBe("");
  });
  it("default price is 0", function () {
    const topping = new Topping();
    expect(topping.price).toBe(0);
  });
});
