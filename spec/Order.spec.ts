import { Order } from "../src/Order";
import { Crust } from "../src/Crust";
import { Pizza } from "../src/Pizza";
import { Topping } from "../src/Topping";

const orderInit = new Order();
const orderAdd = new Order();

describe("Order", function () {
  it("default pizza is Pizza object", function () {
    expect(orderInit.pizza).toEqual(new Pizza());
  });
  it("default crust is Crust object", function () {
    expect(orderInit.crust).toEqual(new Crust());
  });
  it("default toppings is empty array", function () {
    expect(orderInit.toppings).toEqual([]);
  });
  it("adds a pizza object", function () {
    const farmhouse = new Pizza();
    farmhouse.setName("Farmhouse");
    farmhouse.setCategory("Classic Veg");
    farmhouse.setPrice(2.5);
    orderAdd.addPizza(farmhouse);
    expect(orderAdd.pizza.name).toBe("Farmhouse");
    expect(orderAdd.pizza.category).toBe("Classic Veg");
    expect(orderAdd.pizza.price).toBe(2.5);
  });
  it("adds a crust object", function () {
    const cheeseBurst = new Crust();
    cheeseBurst.setName("Cheese Burst");
    cheeseBurst.setPrice(80);
    orderAdd.addCrust(cheeseBurst);
    expect(orderAdd.crust.name).toBe("Cheese Burst");
    expect(orderAdd.crust.price).toBe(80);
  });
  it("adds one topping to the toppings array", function () {
    const jalapeno = new Topping();
    jalapeno.setName("Jalapeno");
    jalapeno.setPrice(10);
    orderAdd.addTopping(jalapeno);
    const expectedOutput = { name: "Jalapeno", price: 10 };
    expect(orderAdd.toppings[0]).toEqual(
      jasmine.objectContaining(expectedOutput)
    );
    expect(orderAdd.toppings.length).toBe(1);
  });
});
