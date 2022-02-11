import { Crust } from "./Crust";
import { Pizza } from "./Pizza";
import { Topping } from "./Topping";
import { Order } from "./Order";
import { Basket } from "./Basket";

export class Customer {
  corporate: boolean;
  constructor() {
    this.corporate = false;
  }

  setCorporate(boolean: boolean): void {
    this.corporate = boolean;
  }
  addToBasket(order: Order, basket: Basket, customer: Customer): void {
    basket.orders.push(order);
    basket.customer = customer;
  }
}
