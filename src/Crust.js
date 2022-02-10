"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crust = void 0;
class Crust {
    constructor() {
        this.name = "";
        this.price = 0;
    }
    setName(name) {
        this.name = name;
    }
    setPrice(price) {
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}
exports.Crust = Crust;
