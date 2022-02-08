export class Topping {
  name: string;
  price: number;
  constructor() {
    this.name = "";
    this.price = 0;
  }

  setName(name: string): void {
    this.name = name;
  }

  setPrice(price: number): void {
    this.price = price;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
