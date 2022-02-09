import { Crust } from "../src/Crust";

const crustInit = new Crust();
const crustSet = new Crust();
const crustGet = new Crust();

describe("Crust", function () {
  it("default name is blank", function () {
    expect(crustInit.name).toBe("");
  });
  it("default price is 0", function () {
    expect(crustInit.price).toBe(0);
  });
  it("sets the crust name", function () {
    crustSet.setName("Thin");
    expect(crustSet.name).toBe("Thin");
  });
  it("sets the crust price", function () {
    crustSet.setPrice(40);
    expect(crustSet.price).toBe(40);
  });
  it("gets the crust name", function () {
    crustGet.setName("Thin");
    expect(crustGet.getName()).toBe("Thin");
  });
  it("gets the crust price", function () {
    crustGet.setPrice(40);
    expect(crustGet.getPrice()).toBe(40);
  });
});
