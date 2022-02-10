import { Order } from "../src/Order";
import { Crust } from "../src/Crust";
import { Pizza } from "../src/Pizza";
import { Topping } from "../src/Topping";
import { Basket } from "../src/Basket";
import { Console } from "console";

const orderInit = new Order();
const orderAdd = new Order();
const orderAddMultiple = new Order();
const orderGet = new Order();

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
  it("adds multiple toppings to the toppings array", function () {
    const jalapeno = new Topping();
    jalapeno.setName("Jalapeno");
    jalapeno.setPrice(10);
    orderAddMultiple.addTopping(jalapeno);
    const corn = new Topping();
    corn.setName("Corn");
    corn.setPrice(10);
    orderAddMultiple.addTopping(corn);
    const expectedJalapeno = { name: "Jalapeno", price: 10 };
    const expectedCorn = { name: "Corn", price: 10 };
    expect(orderAddMultiple.toppings[0]).toEqual(
      jasmine.objectContaining(expectedJalapeno)
    );
    expect(orderAddMultiple.toppings[1]).toEqual(
      jasmine.objectContaining(expectedCorn)
    );
    expect(orderAddMultiple.toppings.length).toBe(2);
  });
  it("gets the pizza from the order object", function () {
    const cheeseNTomato = new Pizza();
    cheeseNTomato.setName("Cheese 'n' Tomato");
    cheeseNTomato.setCategory("Simple Veg");
    cheeseNTomato.setPrice(2);
    orderGet.addPizza(cheeseNTomato);
    expect(orderGet.getPizza().name).toBe("Cheese 'n' Tomato");
    expect(orderGet.getPizza().category).toBe("Simple Veg");
    expect(orderGet.getPizza().price).toBe(2);
  });
  it("gets the crust from the order object", function () {
    const pan = new Crust();
    pan.setName("Pan");
    pan.setPrice(0);
    orderGet.addCrust(pan);
    expect(orderGet.getCrust().name).toBe("Pan");
    expect(orderGet.getCrust().price).toBe(0);
  });
  it("gets the toppings from the order object", function () {
    const paneer = new Topping();
    paneer.setName("Paneer");
    paneer.setPrice(20);
    orderGet.addTopping(paneer);
    const cheese = new Topping();
    cheese.setName("Cheese");
    cheese.setPrice(30);
    orderGet.addTopping(cheese);
    const expectedTopping1 = { name: "Paneer", price: 20 };
    const expectedTopping2 = { name: "Cheese", price: 30 };
    expect(orderGet.getTopping()[0]).toEqual(
      jasmine.objectContaining(expectedTopping1)
    );
    expect(orderGet.getTopping()[1]).toEqual(
      jasmine.objectContaining(expectedTopping2)
    );
  });
  it("throws an error if the number of toppings exceeds two", function () {
    const tooManyToppingsOrder = new Order();
    const tomato = new Topping();
    tomato.setName("Tomato");
    tomato.setPrice(10);
    tooManyToppingsOrder.addTopping(tomato);
    const cheese = new Topping();
    cheese.setName("Cheese");
    cheese.setPrice(30);
    tooManyToppingsOrder.addTopping(cheese);
    const olives = new Topping();
    olives.setName("Olives");
    olives.setPrice(20);
    expect(function () {
      tooManyToppingsOrder.addTopping(olives);
    }).toThrow(new Error("Only possible to add two toppings"));
  });
  it("replaces topping one", function () {
    const changeTopping1Order = new Order();
    const corn = new Topping();
    corn.setName("Corn");
    corn.setPrice(10);
    changeTopping1Order.addTopping(corn);
    const cheese = new Topping();
    cheese.setName("Cheese");
    cheese.setPrice(30);
    const expected = { name: "Corn", price: 10 };
    changeTopping1Order.replaceTopping(1, cheese);
    expect(changeTopping1Order.getTopping()).toEqual(
      jasmine.objectContaining(expected)
    );
  });
});
