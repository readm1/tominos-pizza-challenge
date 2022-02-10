"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
class Pizza {
    constructor() {
        this.name = "";
        this.category = "";
        this.price = 0;
    }
    setName(name) {
        this.name = name;
    }
    setCategory(category) {
        this.category = category;
    }
    setPrice(price) {
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getCategory() {
        return this.category;
    }
    getPrice() {
        return this.price;
    }
}
exports.Pizza = Pizza;
