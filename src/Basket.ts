import { Crust } from "./Crust";
import { Pizza } from "./Pizza";
import { Topping } from "./Topping";
import { Order } from "./Order";

export class Basket {
  orders: Order[];
  constructor() {
    this.orders = [];
  }
}
