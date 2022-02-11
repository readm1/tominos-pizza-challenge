import { Crust } from "../src/Crust";
import { Pizza } from "../src/Pizza";
import { Topping } from "../src/Topping";
import { Order } from "../src/Order";
import { Basket } from "../src/Basket";
import { Customer } from "../src/Customer";

describe("Customer", function () {
  it("pays full price if corporate === false", function () {
    const brian = new Customer();
    brian.corporate = false;
    const brianOrder = new Order();
    const brianBasket = new Basket();
    const margherita = new Pizza();
    margherita.setName("Margherita");
    margherita.setCategory("Simple Veg");
    margherita.setPrice(2);
    brianOrder.addPizza(margherita);
    brianBasket.addToBasket(brianOrder);
    expect(brianBasket.calculatePrice()).toBe(2.0);
  });
});
