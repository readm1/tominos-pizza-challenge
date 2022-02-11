import { Crust } from "../src/Crust";
import { Pizza } from "../src/Pizza";
import { Topping } from "../src/Topping";
import { Order } from "../src/Order";
import { Basket } from "../src/Basket";
import { Customer } from "../src/Customer";

describe("Basket", function () {
  it("adds an Order object to the Basket", function () {
    const jeremy = new Customer();
    const jeremyBasket = new Basket();
    const jeremyOrder = new Order();
    const peppyPaneer = new Pizza();
    peppyPaneer.setName("Peppy Paneer");
    peppyPaneer.setCategory("Exotic Veg");
    peppyPaneer.setPrice(3);
    jeremyOrder.addPizza(peppyPaneer);
    const pan = new Crust();
    pan.setName("Pan");
    pan.setPrice(0);
    jeremyOrder.addCrust(pan);
    const olives = new Topping();
    olives.setName("Olives");
    olives.setPrice(20);
    jeremyOrder.addTopping(olives);
    const capsicum = new Topping();
    capsicum.setName("Capsicum");
    capsicum.setPrice(10);
    jeremyOrder.addTopping(capsicum);
    jeremy.addToBasket(jeremyOrder, jeremyBasket, jeremy);
    const expectedPizza = {
      name: "Peppy Paneer",
      category: "Exotic Veg",
      price: 3,
    };
    const expectedCrust = { name: "Pan", price: 0 };
    const expectedTopping1 = { name: "Olives", price: 20 };
    const expectedTopping2 = { name: "Capsicum", price: 10 };
    expect(jeremyBasket.orders[0].pizza).toEqual(
      jasmine.objectContaining(expectedPizza)
    );
    expect(jeremyBasket.orders[0].crust).toEqual(
      jasmine.objectContaining(expectedCrust)
    );
    expect(jeremyBasket.orders[0].toppings[0]).toEqual(
      jasmine.objectContaining(expectedTopping1)
    );
    expect(jeremyBasket.orders[0].toppings[1]).toEqual(
      jasmine.objectContaining(expectedTopping2)
    );
    expect(jeremyBasket.orders.length).toBe(1);
  });
  it("calculates the cost of the order with one, two or three toppings", function () {
    const bigSuze = new Customer();
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
    bigSuze.addToBasket(userStory1, basketNoToppings, bigSuze);
    expect(basketNoToppings.calculatePrice()).toBe(4.56); // 3.8 + VAT
    const olives = new Topping();
    olives.setName("Olives");
    olives.setPrice(20);
    userStory1.addTopping(olives);
    bigSuze.addToBasket(userStory1, basketOneTopping, bigSuze);
    expect(basketOneTopping.calculatePrice()).toBe(4.8); // 4 + VAT
    const corn = new Topping();
    corn.setName("Corn");
    corn.setPrice(10);
    userStory1.addTopping(corn);
    bigSuze.addToBasket(userStory1, basketTwoToppings, bigSuze);
    expect(basketTwoToppings.calculatePrice()).toBe(4.92); // 4.1 + VAT
  });
});
