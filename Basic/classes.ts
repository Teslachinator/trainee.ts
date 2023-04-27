class Car {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  // private & public & protected
  getInfo(): string {
    return `${this.name} - ${this.price}`;
  }
}

new Car("bmw", 10000).getInfo();
