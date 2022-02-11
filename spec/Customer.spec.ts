import { Crust } from "../src/Crust";
import { Pizza } from "../src/Pizza";
import { Topping } from "../src/Topping";
import { Order } from "../src/Order";
import { Basket } from "../src/Basket";
import { Customer } from "../src/Customer";

describe("Customer", function () {
  it("adds an Order object to the Basket", function () {
    const jez = new Customer();
    const jezBasket = new Basket();
    const jezOrder = new Order();
    const peppyPaneer = new Pizza();
    peppyPaneer.setName("Peppy Paneer");
    peppyPaneer.setCategory("Exotic Veg");
    peppyPaneer.setPrice(3);
    jezOrder.addPizza(peppyPaneer);
    const pan = new Crust();
    pan.setName("Pan");
    pan.setPrice(0);
    jezOrder.addCrust(pan);
    const olives = new Topping();
    olives.setName("Olives");
    olives.setPrice(20);
    jezOrder.addTopping(olives);
    const capsicum = new Topping();
    capsicum.setName("Capsicum");
    capsicum.setPrice(10);
    jezOrder.addTopping(capsicum);
    jez.addToBasket(jezOrder, jezBasket, jez);
    const expectedPizza = {
      name: "Peppy Paneer",
      category: "Exotic Veg",
      price: 3,
    };
    const expectedCrust = { name: "Pan", price: 0 };
    const expectedTopping1 = { name: "Olives", price: 20 };
    const expectedTopping2 = { name: "Capsicum", price: 10 };
    expect(jezBasket.orders[0].pizza).toEqual(
      jasmine.objectContaining(expectedPizza)
    );
    expect(jezBasket.orders[0].crust).toEqual(
      jasmine.objectContaining(expectedCrust)
    );
    expect(jezBasket.orders[0].toppings[0]).toEqual(
      jasmine.objectContaining(expectedTopping1)
    );
    expect(jezBasket.orders[0].toppings[1]).toEqual(
      jasmine.objectContaining(expectedTopping2)
    );
    expect(jezBasket.orders.length).toBe(1);
  });
  it("pays full price if corporate === false", function () {
    const jeff = new Customer();
    jeff.setCorporate(false);
    const jeffOrder = new Order();
    const jeffBasket = new Basket();
    const margherita = new Pizza();
    margherita.setName("Margherita");
    margherita.setCategory("Simple Veg");
    margherita.setPrice(2);
    jeffOrder.addPizza(margherita);
    jeff.addToBasket(jeffOrder, jeffBasket, jeff);
    expect(jeffBasket.calculatePrice()).toBe(2.4); // 2.0 + VAT
  });
  it("pays a discounted rate if corporate === true", function () {
    const sophie = new Customer();
    sophie.setCorporate(true);
    const sophieOrder = new Order();
    const sophieBasket = new Basket();
    const farmhouse = new Pizza();
    farmhouse.setName("Farmhouse");
    farmhouse.setCategory("Classic Veg");
    farmhouse.setPrice(2.5);
    sophieOrder.addPizza(farmhouse);
    sophie.addToBasket(sophieOrder, sophieBasket, sophie);
    expect(sophieBasket.calculatePrice()).toBe(2.4); // 2.0 (2.5 * 0.8) + VAT
  });
  it("doesn't pay a discounted rate if corporate === true && pizza.category === 'Simple Veg'", function () {
    const johnson = new Customer();
    johnson.setCorporate(true);
    const johnsonOrder = new Order();
    const johnsonBasket = new Basket();
    const farmhouse = new Pizza();
    farmhouse.setName("Chees 'n' Tomato");
    farmhouse.setCategory("Simple Veg");
    farmhouse.setPrice(2.5);
    johnsonOrder.addPizza(farmhouse);
    johnson.addToBasket(johnsonOrder, johnsonBasket, johnson);
    expect(johnsonBasket.calculatePrice()).toBe(3); // 2.5 + VAT
  });
});
