import { Order } from "../src/Order";
// import { Crust } from "./Crust";
import { Pizza } from "../src/Pizza";
// import { Topping } from "./Topping";

const orderInit = new Order();

describe("Order", function () {
  it("default pizza is Pizza objects", function () {
    return expect(orderInit.pizza).toEqual(new Pizza());
  });
});
