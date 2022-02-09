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
    let toppingsPrice = 0;
    for (const topping of this.toppings) {
      toppingsPrice += topping.price;
    }
    toppingsPrice /= 100;
    const subtotal = pizzaPrice + crustPrice + toppingsPrice;
    const finalTotal = parseFloat((subtotal * 1.2).toFixed(2));
    return finalTotal;
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
