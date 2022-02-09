import { Order } from "../src/Order";
import { Crust } from "../src/Crust";
import { Pizza } from "../src/Pizza";
import { Topping } from "../src/Topping";

const orderInit = new Order();

describe("Order", function () {
  it("default pizza is Pizza object", function () {
    return expect(orderInit.pizza).toEqual(new Pizza());
  });
  it("default crust is Crust object", function () {
    return expect(orderInit.crust).toEqual(new Crust());
  });
  it("default toppings is empty array", function () {
    return expect(orderInit.toppings).toEqual([]);
  });
});
