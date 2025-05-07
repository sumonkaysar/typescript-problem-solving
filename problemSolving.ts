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
