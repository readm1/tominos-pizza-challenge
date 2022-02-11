import { Crust } from "../src/Crust";
import { Pizza } from "../src/Pizza";
import { Topping } from "../src/Topping";
import { Order } from "../src/Order";
import { Basket } from "../src/Basket";
import { Customer } from "../src/Customer";

describe("Customer", function () {
  it("pays full price if corporate === false", function () {
    const sophie = new Customer();
    sophie.setCorporate(false);
    const sophieOrder = new Order();
    const sophieBasket = new Basket();
    const margherita = new Pizza();
    margherita.setName("Margherita");
    margherita.setCategory("Simple Veg");
    margherita.setPrice(2);
    sophieOrder.addPizza(margherita);
    sophie.addToBasket(sophieOrder, sophieBasket, sophie);
    expect(sophieBasket.calculatePrice()).toBe(2.4); // 2.0 + VAT
  });
  it("pays a discounted rate if corporate === true", function () {
    const johnson = new Customer();
    johnson.setCorporate(true);
    const johnsonOrder = new Order();
    const johnsonBasket = new Basket();
    const farmhouse = new Pizza();
    farmhouse.setName("Farmhouse");
    farmhouse.setCategory("Classic Veg");
    farmhouse.setPrice(2.5);
    johnsonOrder.addPizza(farmhouse);
    johnson.addToBasket(johnsonOrder, johnsonBasket, johnson);
    expect(johnsonBasket.calculatePrice()).toBe(2.4); // 2.0 (2.5 * 0.8) + VAT
  });
});
