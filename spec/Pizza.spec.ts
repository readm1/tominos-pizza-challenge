import { Pizza } from "../src/Pizza";
const pizza = new Pizza();
const pizzaGetSet = new Pizza();

describe("Pizza", function () {
  it("default name is blank", function () {
    expect(pizza.name).toBe("");
  });
  it("default category is blank", function () {
    expect(pizza.category).toBe("");
  });
  it("default price is 0", function () {
    expect(pizza.price).toBe(0);
  });
  it("sets the name to Margherita", function () {
    pizzaGetSet.setName("Margherita");
    expect(pizzaGetSet.name).toBe("Margherita");
  });
  it("sets the category to Simple Veg", function () {
    pizzaGetSet.setCategory("Simple Veg");
    expect(pizzaGetSet.category).toBe("Simple Veg");
  });
  it("sets the price to 2", function () {
    pizzaGetSet.setPrice(2);
    expect(pizzaGetSet.price).toBe(2);
  });
  it("gets the name of Pizza", function () {
    const pizzaName = pizzaGetSet.getName();
    expect(pizzaName).toBe("Margherita");
  });
  it("gets the category of Pizza", function () {
    const pizzaCategory = pizzaGetSet.getCategory();
    expect(pizzaCategory).toBe("Simple Veg");
  });
  it("gets the price of Pizza", function () {
    const pizzaPrice = pizzaGetSet.getPrice();
    expect(pizzaPrice).toBe(2);
  });
});
