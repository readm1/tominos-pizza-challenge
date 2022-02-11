import { Crust } from "../src/Crust";
import { Pizza } from "../src/Pizza";
import { Topping } from "../src/Topping";
import { Order } from "../src/Order";
import { Basket } from "../src/Basket";
import { Customer } from "../src/Customer";

describe("Customer", function () {
  it("pays full price if corporate === false", function () {
    const brian = new Customer();
    brian.setCorporate(false);
    const brianOrder = new Order();
    const brianBasket = new Basket();
    const margherita = new Pizza();
    margherita.setName("Margherita");
    margherita.setCategory("Simple Veg");
    margherita.setPrice(2);
    brianOrder.addPizza(margherita);
    brianBasket.addToBasket(brianOrder);
    expect(brianBasket.calculatePrice()).toBe(2.4); // 2.0 + VAT
  });
  it("pays a discounted rate if corporate === true", function () {
    const nina = new Customer();
    nina.setCorporate(true);
    const ninaOrder = new Order();
    const ninaBasket = new Basket();
    const farmhouse = new Pizza();
    farmhouse.setName("Farmhouse");
    farmhouse.setCategory("Classic Veg");
    farmhouse.setPrice(2.5);
    ninaOrder.addPizza(farmhouse);
    ninaBasket.addToBasket(ninaOrder);
    expect(ninaBasket.calculatePrice()).toBe(2.4); // 2.0 (2.5 * 0.8) + VAT
  });
});
