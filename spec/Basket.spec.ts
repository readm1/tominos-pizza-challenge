import { Crust } from "../src/Crust";
import { Pizza } from "../src/Pizza";
import { Topping } from "../src/Topping";
import { Order } from "../src/Order";
import { Basket } from "../src/Basket";

describe("Basket", function () {
  it("adds an Order object to the Basket", function () {
    const basket = new Basket();
    const basketPizza = new Order();
    const peppyPaneer = new Pizza();
    peppyPaneer.setName("Peppy Paneer");
    peppyPaneer.setCategory("Exotic Veg");
    peppyPaneer.setPrice(3);
    basketPizza.addPizza(peppyPaneer);
    const pan = new Crust();
    pan.setName("Pan");
    pan.setPrice(0);
    basketPizza.addCrust(pan);
    const olives = new Topping();
    olives.setName("Olives");
    olives.setPrice(20);
    basketPizza.addTopping(olives);
    const capsicum = new Topping();
    capsicum.setName("Capsicum");
    capsicum.setPrice(10);
    basketPizza.addTopping(capsicum);
    basket.addToBasket(basketPizza);
    const expectedPizza = {
      name: "Peppy Paneer",
      category: "Exotic Veg",
      price: 3,
    };
    const expectedCrust = { name: "Pan", price: 0 };
    const expectedTopping1 = { name: "Olives", price: 20 };
    const expectedTopping2 = { name: "Capsicum", price: 10 };
    expect(basket.orders[0].pizza).toEqual(
      jasmine.objectContaining(expectedPizza)
    );
    expect(basket.orders[0].crust).toEqual(
      jasmine.objectContaining(expectedCrust)
    );
    expect(basket.orders[0].toppings[0]).toEqual(
      jasmine.objectContaining(expectedTopping1)
    );
    expect(basket.orders[0].toppings[1]).toEqual(
      jasmine.objectContaining(expectedTopping2)
    );
    expect(basket.orders.length).toBe(1);
  });
  it("calculates the cost of the order with one, two or three toppings", function () {
    const basketNoToppings = new Basket();
    const basketOneTopping = new Basket();
    const basketTwoToppings = new Basket();
    const userStory1 = new Order();
    const mexicanGreenWave = new Pizza();
    mexicanGreenWave.setName("Mexican Green Wave");
    mexicanGreenWave.setCategory("Exotic Veg");
    mexicanGreenWave.setPrice(3);
    userStory1.addPizza(mexicanGreenWave);
    const cheeseBurst = new Crust();
    cheeseBurst.setName("Cheese Burst");
    cheeseBurst.setPrice(80);
    userStory1.addCrust(cheeseBurst);
    basketNoToppings.addToBasket(userStory1);
    expect(basketNoToppings.calculatePrice()).toBe(4.56); // 3.8 + VAT
    const olives = new Topping();
    olives.setName("Olives");
    olives.setPrice(20);
    userStory1.addTopping(olives);
    basketOneTopping.addToBasket(userStory1);
    expect(basketOneTopping.calculatePrice()).toBe(4.8); // 4 + VAT
    const corn = new Topping();
    corn.setName("Corn");
    corn.setPrice(10);
    userStory1.addTopping(corn);
    basketTwoToppings.addToBasket(userStory1);
    expect(basketTwoToppings.calculatePrice()).toBe(4.92); // 4.1 + VAT
  });
});
