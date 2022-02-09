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
    const pizzaPrice = this.pizza.price;
    const crustPrice = this.crust.price / 100;
    const toppingsPrice = this.toppings[0].price / 100;
    const subtotal = pizzaPrice + crustPrice + toppingsPrice;
    return subtotal * 1.2;
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
