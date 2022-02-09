import { Order } from "../src/Order";
import { Crust } from "../src/Crust";
import { Pizza } from "../src/Pizza";
import { Topping } from "../src/Topping";

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
    const mexicanGreenWave = new Pizza();
    mexicanGreenWave.setName("Mexican Green Wave");
    mexicanGreenWave.setCategory("Exotic Veg");
    mexicanGreenWave.setPrice(3);
    orderGet.addPizza(mexicanGreenWave);
    expect(orderGet.getPizza().name).toBe("Mexican Green Wave");
    expect(orderGet.getPizza().category).toBe("Exotic Veg");
    expect(orderGet.getPizza().price).toBe(3);
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
  it("calculates the cost of the order", function () {
    const orderCostNoToppings = new Order();
    const orderCostOneTopping = new Order();
    const orderCostTwoToppings = new Order();
    const cheeseNTomato = new Pizza();
    cheeseNTomato.setName("Cheese 'n' Tomato");
    cheeseNTomato.setCategory("SimpleVeg");
    cheeseNTomato.setPrice(2);
    orderCostNoToppings.addPizza(cheeseNTomato);
    orderCostOneTopping.addPizza(cheeseNTomato);
    orderCostTwoToppings.addPizza(cheeseNTomato);
    const thin = new Crust();
    thin.setName("Thin");
    thin.setPrice(40);
    orderCostNoToppings.addCrust(thin);
    orderCostOneTopping.addCrust(thin);
    orderCostTwoToppings.addCrust(thin);
    expect(orderCostOneTopping.calculatePrice()).toBe(2.88); // 2.4 + VAT
    const capsicum = new Topping();
    capsicum.setName("Capsicum");
    capsicum.setPrice(10);
    orderCostOneTopping.addTopping(capsicum);
    orderCostTwoToppings.addTopping(capsicum);
    expect(orderCostOneTopping.calculatePrice()).toBe(3); // 2.5 + VAT
    const olives = new Topping();
    olives.setName("Olives");
    olives.setPrice(20);
    orderCostTwoToppings.addTopping(olives);
    expect(orderCostTwoToppings.calculatePrice()).toBe(3.24); // 2.7 + VAT
  });
});
