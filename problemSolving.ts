// Problem Solving - 1
function formatString(input: string, toUpper: boolean = true): string {
  if (toUpper) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}

// Problem Solving - 2
interface Product {
  title: string;
  rating: number;
}
function filterByRating(items: Product[]): Product[] {
  const filtered = items.filter((item) => item.rating >= 4);
  return filtered;
}

// Problem Solving - 3
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat(1);
}

// Problem Solving - 4
class Vehicle {
  constructor(private make: string, private year: number) {}
  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }
  getModel(): string {
    return `Model: ${this.model}`;
  }
}
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo(), myCar.getModel());
