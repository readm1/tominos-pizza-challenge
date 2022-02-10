"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const Crust_1 = require("./Crust");
const Pizza_1 = require("./Pizza");
class Order {
    // price: number;
    constructor() {
        this.toppings = [];
        this.pizza = new Pizza_1.Pizza();
        this.crust = new Crust_1.Crust();
        // this.price = 0;
    }
    calculatePrice() {
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
    addPizza(pizza) {
        this.pizza = pizza;
    }
    addCrust(crust) {
        this.crust = crust;
    }
    addTopping(topping) {
        if (this.toppings.length >= 2) {
            throw new Error("Only possible to add two toppings");
        }
        else {
            this.toppings.push(topping);
        }
    }
    getPizza() {
        return this.pizza;
    }
    getCrust() {
        return this.crust;
    }
    getTopping() {
        return this.toppings;
    }
}
exports.Order = Order;
