import { Crust } from "./Crust";
import { Pizza } from "./Pizza";
import { Topping } from "./Topping";
import { Order } from "./Order";
import { Customer } from "./Customer";

export class Basket {
  orders: Order[];
  customer: Customer;
  constructor() {
    this.orders = [];
    this.customer = new Customer();
  }

  calculatePrice(): number {
    let pizzaPrice = 0;
    let crustPrice = 0;
    let toppingsPrice = 0;
    for (const order of this.orders) {
      if (this.customer.corporate && order.pizza.name !== "Simply Veg") {
        pizzaPrice += order.pizza.price * 0.8;
      } else {
        pizzaPrice += order.pizza.price;
      }
      crustPrice += order.crust.price;
      for (const topping of order.toppings) {
        toppingsPrice += topping.price;
      }
    }
    crustPrice /= 100;
    toppingsPrice /= 100;
    const subtotal = pizzaPrice + crustPrice + toppingsPrice;
    const finalTotal = parseFloat((subtotal * 1.2).toFixed(2));
    return finalTotal;
  }
}
