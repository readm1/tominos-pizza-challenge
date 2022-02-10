import { Crust } from "./Crust";
import { Pizza } from "./Pizza";
import { Topping } from "./Topping";
import { Order } from "./Order";

export class Basket {
  orders: Order[];
  constructor() {
    this.orders = [];
  }

  addToBasket(order: Order): void {
    this.orders.push(order);
  }

  calculatePrice(): number {
    let pizzaPrice = 0;
    let crustPrice = 0;
    let toppingsPrice = 0;
    for (const order of this.orders) {
      pizzaPrice += order.pizza.price;
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
