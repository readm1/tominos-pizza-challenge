"use strict";
import { Pizza } from "./src/Pizza";
import { Crust } from "./src/Crust";
import { Topping } from "./src/Topping";
import { Order } from "./src/Order";

// Menu
const pizzas = [
  ["Margherita", "Simple Veg", 2],
  ["Cheese 'n' Tomato", "Simple Veg", 2],
  ["Farmhouse", "Classic Veg", 2.5],
  ["Veg Supreme", "Classic Veg", 2.5],
  ["Mexican Green Wave", "Exotic Veg", 3],
  ["Peppy Paneer", "Exotic Veg", 3],
];

const crusts = [
  ["Pan", 0],
  ["Thin", 40],
  ["Cheese Burst", 80],
];

const toppings = [
  ["Tomato", 10],
  ["Jalapeno", 10],
  ["Olives", 20],
  ["Paneer", 20],
  ["Capsicum", 10],
  ["Corn", 10],
  ["Cheese", 30],
];

// Elements

const containerMenu = document.querySelector(".menu__display");
const containerApp = document.querySelector(".app");

// Creating DOM Elements

const displayPizzas = function (pizzas) {
  pizzas.forEach(function (pizza) {
    const name = pizza[0];
    const category = pizza[1];
    const price = pizza[2];
    const html = `<div class="menu__display pizza__display">
    <div class="menu__pizzaName" href="${name}">${name}</div>
    <div class="menu__pizzaDetails">${category} - £${price.toFixed(2)}</div>
  </div>`;
    containerMenu.insertAdjacentHTML("afterbegin", html);
  });
};
displayPizzas(pizzas);

const displayToppings = function (toppings) {
  toppings.forEach(function (topping) {
    const name = topping[0];
    const price = topping[1];
    const html = `<div class="menu__display topping__display">
    <div class="menu__toppingName" href="${name}">${name}</div>
    <div class="menu__toppingPrice">£${(price / 100).toFixed(2)}</div>
    </div>`;
    containerMenu.insertAdjacentHTML("afterbegin", html);
  });
};
displayToppings(toppings);

const displayCrusts = function (crusts) {
  crusts.forEach(function (crust) {
    const name = crust[0];
    const price = crust[1];
    const html = `<div class="menu__display crust__display">
      <div class="menu__crustName" href="${name}">${name}</div>
      <div class="menu__crustPrice">£${(price / 100).toFixed(2)}</div>
      </div>`;
    containerMenu.insertAdjacentHTML("afterbegin", html);
  });
};
displayCrusts(crusts);
