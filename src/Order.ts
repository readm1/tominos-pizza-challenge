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

  calculatePrice(): number {
    return 0;
  }

  addPizza(pizza: Pizza): void {
    this.pizza = pizza;
  }

  addCrust(crust: Crust): void {
    this.crust = crust;
  }

  addTopping(topping: Topping): void {
    this.toppings.push(topping);
  }
}
