"use strict";

const pizzas = [
  ["Margherita", "Simple Veg", 2],
  ["Cheese 'n' Tomato", "Simple Veg", 2],
  ["Farmhouse", "Classic Veg", 2.5],
  ["Veg Supreme", "Classic Veg", 2.5],
  ["Mexican Green Wave", "Exotic Veg", 3],
  ["Peppy Paneer", "Exotic Veg", 3],
];

const crusts = {
  pan: ["Pan", 0],
  thin: ["Thin", 40],
  cheeseBurst: ["Cheese Burst", 80],
};

const toppings = {
  tomato: ["Tomato", 10],
  jalapeno: ["Jalapeno", 10],
  olives: ["Olives", 20],
  paneer: ["Paneer", 20],
  capsicum: ["Capsicum", 10],
  corn: ["Corn", 10],
  cheese: ["Cheese", 30],
};

// ELEMENTS

const containerMenu = document.querySelector(".menu__display");

// Creating DOM Elements

const displayPizza = function (pizzas) {
  pizzas.forEach(function (pizza) {
    const name = pizza[0];
    const category = pizza[1];
    const price = pizza[2];
    const html = `<div class="menu__display">
    <div class="menu__pizzaName">${name}</div>
    <div class="menu__pizzaDetails">${category} - £${price.toFixed(2)}</div>
  </div>`;
    containerMenu.insertAdjacentHTML("afterbegin", html);
  });
};
displayPizza(pizzas);
