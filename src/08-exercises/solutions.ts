// ==============================
// 08 - 练习题参考答案
// ==============================
// 建议先独立完成 exercises.ts，再打开这个文件对照。

export {};

console.log("=== 08-exercise-solutions ===");

// --- Exercise 1: 类型注解 ---
let message: string = "Hello";
let count: number = 42;
let items: number[] = [1, 2, 3];

console.log(message);
console.log(count);
console.log(items);

// --- Exercise 2: 泛型函数 ---
function lastItem<ElementType>(itemsToRead: ElementType[]): ElementType | undefined {
  return itemsToRead[itemsToRead.length - 1];
}

console.log(lastItem(["first", "second", "third"]));
console.log(lastItem([10, 20, 30]));

// --- Exercise 3: 接口与类 ---
interface Entity {
  id: number;
  name: string;
  createdAt: Date;
}

class UserEntity implements Entity {
  id: number;
  name: string;
  createdAt: Date;

  constructor(id: number, name: string, createdAt: Date) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
  }
}

const userEntity = new UserEntity(1, "Alice", new Date("2026-01-01"));
console.log(userEntity);

// --- Exercise 4: 类型守卫 ---
function formatInput(input: string | number | boolean): string {
  if (typeof input === "string") {
    return input.trim();
  }

  if (typeof input === "number") {
    return input.toFixed(2);
  }

  if (input === true) {
    return "true";
  }

  return "false";
}

console.log(formatInput("  hello  "));
console.log(formatInput(3.14159));
console.log(formatInput(true));

// --- Exercise 5: 工具类型 ---
interface ExerciseTodo {
  id: number;
  title: string;
  description: string;
  done: boolean;
  createdAt: Date;
}

type TodoCreate = Omit<ExerciseTodo, "id" | "createdAt">;
type TodoUpdate = Partial<Omit<ExerciseTodo, "id" | "createdAt">>;
type TodoSummary = Pick<ExerciseTodo, "id" | "title" | "done">;

const todoCreate: TodoCreate = {
  title: "Practice TypeScript",
  description: "Finish the utility type exercise",
  done: false,
};
const todoUpdate: TodoUpdate = { done: true };
const todoSummary: TodoSummary = { id: 1, title: "Practice TypeScript", done: false };

console.log(todoCreate);
console.log(todoUpdate);
console.log(todoSummary);

// --- Exercise 6: 条件类型 ---
type Flatten<ValueType> = ValueType extends Array<infer ElementType>
  ? ElementType
  : ValueType;

type StringResult = Flatten<string[]>;
type NumberResult = Flatten<number>;

const stringResult: StringResult = "hello";
const numberResult: NumberResult = 123;

console.log(stringResult);
console.log(numberResult);
