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

// Problem Solving - 5
function processValue(value: string | number): number {
  if (typeof value === "number") {
    return value * 2;
  }
  return value.length;
}

// Problem Solving - 6
// interface Product {
//     name: string;
//     price: number;
//   }

//   function getMostExpensiveProduct(products: Product[]): Product | null{
//     if (products.length > 0) {
//         return products.find((product: Product) => product.)
//     }
//   }

// Problem Solving - 7
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
