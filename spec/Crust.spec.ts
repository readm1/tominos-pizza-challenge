import { Crust } from "../src/Crust";
describe("Crust", function () {
  it("default name is blank", function () {
    const crust = new Crust();
    expect(crust.name).toBe("");
  });
  it("default price is 0", function () {
    const crust = new Crust();
    expect(crust.price).toBe(0);
  });
});
