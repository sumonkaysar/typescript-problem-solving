# 🎯 Interview Questions - Blog Task

Welcome to **🎯 Interview Questions - Blog** — a space where we explore the latest and greatest in web development, from foundational concepts to modern frameworks, tools, and best practices.

## 🤔 What are some differences between interfaces and types in TypeScript?

In TypeScript, both interface and type are used to define the shape of objects, but they have some differences in capabilities and usage.

### Key Differences Between Types and Interfaces

There are some differences between Types and Interfaces, such as:

- **Handling Primitive Types:** Types can be used to define the primitive types whereas interfaces can not be used for primitive types

  ```
  type ID = string; // ✅ Valid
  // interface ID = string; // ❌ Invalid
  ```

- **Union and Intersection Types:** Types are more flexible to define Union and Intersection Types. With the type keyword, it is easy to create union types using the **|** operator and intersection types using the **&** operator. While interfaces can also represent union types indirectly, they don’t have built-in support for intersection types.

  ```
  type Success = { status: "success" };
  type Error = { status: "error" };
  type Response = Success | Error; // ✅ Union

  type A = { a: string };
  type B = { b: number };
  type Combined = A & B; // ✅ Intersection
  ```

- **Declaration Merging:** Interfaces support declaration merging, which means it is possible to declare multiple interfaces with the same name, and TypeScript will merge them into a single interface with the combined properties and methods. But, types do not support declaration merging.

  ```
  interface User {
      name: string;
  }

  interface User {
      age: number;
  }

  const user: User = { name: "John", age: 30 }; // ✅ Works due to merging
  ```

- **Function and Tuple Types:** Type can describe functions and tuples directly; interface has limitations.

  ```
  type Greet = (name: string) => string; // ✅ Function type
  type Point = [number, number];         // ✅ Tuple type

  // interface Greet { (name: string): string } // ✅ Also works
  // interface Point = [number, number];       // ❌ Invalid
  ```

<br>

## 🔑 What is the use of the keyof keyword in TypeScript? Provide an example.

The **keyof** keyword in TypeScript is used to get all the keys of an object type as a union of string literal types. It takes an object type and produces a string literal union of its keys.

```
type Employee = {
    name: string;
    salary: number;
}

type EmployeeKeys = keyof Employee; // "name" | "salary"
```
