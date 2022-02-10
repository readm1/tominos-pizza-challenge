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

  //   calculatePrice(): number {
  //     const pizzaPrice = this.pizza.price;
  //     const crustPrice = this.crust.price / 100;
  //     let toppingsPrice = 0;
  //     for (const topping of this.toppings) {
  //       toppingsPrice += topping.price;
  //     }
  //     toppingsPrice /= 100;
  //     const subtotal = pizzaPrice + crustPrice + toppingsPrice;
  //     const finalTotal = parseFloat((subtotal * 1.2).toFixed(2));
  //     return finalTotal;
  //   }
}
