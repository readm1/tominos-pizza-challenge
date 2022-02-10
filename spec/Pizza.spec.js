"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = require("../src/Pizza");
const pizzaInit = new Pizza_1.Pizza();
const pizzaSet = new Pizza_1.Pizza();
const pizzaGet = new Pizza_1.Pizza();
describe("Pizza", function () {
    it("default name is blank", function () {
        expect(pizzaInit.name).toBe("");
    });
    it("default category is blank", function () {
        expect(pizzaInit.category).toBe("");
    });
    it("default price is 0", function () {
        expect(pizzaInit.price).toBe(0);
    });
    it("sets the name to Margherita", function () {
        pizzaSet.setName("Margherita");
        expect(pizzaSet.name).toBe("Margherita");
    });
    it("sets the category to Simple Veg", function () {
        pizzaSet.setCategory("Simple Veg");
        expect(pizzaSet.category).toBe("Simple Veg");
    });
    it("sets the price to 2", function () {
        pizzaSet.setPrice(2);
        expect(pizzaSet.price).toBe(2);
    });
    it("gets the name of Pizza", function () {
        pizzaGet.setName("Margherita");
        expect(pizzaGet.getName()).toBe("Margherita");
    });
    it("gets the category of Pizza", function () {
        pizzaGet.setCategory("Simple Veg");
        expect(pizzaGet.getCategory()).toBe("Simple Veg");
    });
    it("gets the price of Pizza", function () {
        pizzaGet.setPrice(2);
        expect(pizzaGet.getPrice()).toBe(2);
    });
});
