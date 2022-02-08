export class Pizza {
  name: string;
  category: string;
  price: number;
  constructor() {
    this.name = "";
    this.category = "";
    this.price = 0;
  }

  setName(name: string): void {
    this.name = name;
  }

  setCategory(category: string): void {
    this.category = category;
  }

  setPrice(price: number): void {
    this.price = price;
  }

  getName(): string {
    return this.name;
  }

  getCategory(): string {
    return this.category;
  }

  getPrice(): number {
    return this.price;
  }
}
