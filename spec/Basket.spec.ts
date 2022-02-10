import { Crust } from "../src/Crust";
import { Pizza } from "../src/Pizza";
import { Topping } from "../src/Topping";
import { Order } from "../src/Order";
import { Basket } from "../src/Basket";

it("calculates the cost of the order with one, two or three toppings", function () {
  const basket = new Basket();
  const userStory1 = new Order();
  const mexicanGreenWave = new Pizza();
  mexicanGreenWave.setName("Mexican Green Wave");
  mexicanGreenWave.setCategory("Exotic Veg");
  mexicanGreenWave.setPrice(3);
  userStory1.addPizza(mexicanGreenWave);
  const cheeseBurst = new Crust();
  cheeseBurst.setName("Cheese Burst");
  cheeseBurst.setPrice(80);
  userStory1.addCrust(cheeseBurst);
  const olives = new Topping();
  olives.setName("Olives");
  olives.setPrice(20);
  userStory1.addTopping(olives);
  const corn = new Topping();
  corn.setName("Corn");
  corn.setPrice(10);
  userStory1.addTopping(corn);
  userStory1.addToBasket(basket);
  expect(basket.calculatePrice()).toBe(4.92); // 4.1 + VAT
});
