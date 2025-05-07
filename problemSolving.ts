function formatString(input: string, toUpper: boolean = true): string {
  if (toUpper) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}

interface Book {
  title: string;
  rating: number;
}
function filterByRating(items: Book[]): Book[] {
  const filtered = items.filter((item) => item.rating >= 4);
  return filtered;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat(1);
}

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

function processValue(value: string | number): number {
  if (typeof value === "number") {
    return value * 2;
  }
  return value.length;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length > 0) {
    return products.reduce(
      (acc: Product, curr: Product) => (acc.price < curr.price ? curr : acc),
      products[0]
    );
  } else {
    return null;
  }
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Sunday:
    case Day.Saturday:
      return "Weekend";
    default:
      return "Weekday";
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject("Error: Negative number not allowed");
    } else {
      setTimeout(() => resolve(n * n), 1000);
    }
  });
}
