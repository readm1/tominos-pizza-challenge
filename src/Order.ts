import { Crust } from "./Crust";
import { Pizza } from "./Pizza";
import { Topping } from "./Topping";

export class Order {
  pizza: Pizza;
  crust: Crust;
  toppings: Topping[];
  constructor() {
    this.toppings = [];
    this.pizza = new Pizza();
    this.crust = new Crust();
  }

  addPizza(pizza: Pizza): void {
    this.pizza = pizza;
  }

  addCrust(crust: Crust): void {
    this.crust = crust;
  }

  addTopping(topping: Topping): void {
    if (this.toppings.length >= 2) {
      throw new Error("Only possible to add two toppings");
    } else {
      this.toppings.push(topping);
    }
  }

  getPizza(): Pizza {
    return this.pizza;
  }

  getCrust(): Crust {
    return this.crust;
  }

  getTopping(): Topping[] {
    return this.toppings;
  }
}
