import { Topping } from "../src/Topping";

const toppingInit = new Topping();
const toppingSet = new Topping();
const toppingGet = new Topping();

describe("Topping", function () {
  it("default name is blank", function () {
    expect(toppingInit.name).toBe("");
  });
  it("default price is 0", function () {
    expect(toppingInit.price).toBe(0);
  });
  it("sets the topping name", function () {
    toppingSet.setName("Olives");
    expect(toppingSet.name).toBe("Olives");
  });
  it("sets the topping price", function () {
    toppingSet.setPrice(20);
    expect(toppingSet.price).toBe(20);
  });
  it("gets the topping name", function () {
    toppingGet.setName("Olives");
    expect(toppingGet.getName()).toBe("Olives");
  });
  it("gets the topping price", function () {
    toppingGet.setPrice(20);
    expect(toppingGet.getPrice()).toBe(20);
  });
});
