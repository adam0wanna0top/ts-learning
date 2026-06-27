// ==============================
// 01 - TypeScript 基础
// ==============================

console.log("=== 01-basics ===");

// --- 变量声明 ---
let username: string = "Alice";
let age: number = 25;
let isActive: boolean = true;

// 数组
let scores: number[] = [90, 85, 100];
let tags: Array<string> = ["typescript", "beginner", "syntax"];

// 元组 - 固定长度和类型的数组
let personTuple: [string, number] = ["Bob", 30];

// 枚举
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
let currentDirection: Direction = Direction.Up;

// any - 跳过类型检查（尽量避免使用）
let flexibleValue: any = "hello";
flexibleValue = 42;

// unknown - 安全版的 any
let rawInput: unknown = "test";
if (typeof rawInput === "string") {
  const upperCaseInput: string = rawInput.toUpperCase();
  console.log(`Unknown input after narrowing: ${upperCaseInput}`); // 类型收窄后才可使用，toUpperCase 会返回一个新的大写字符串
}

// void - 无返回值
function logMessage(message: string): void {
  console.log(message);
}

// never - 永远不会返回
function throwError(message: string): never {
  throw new Error(message);
}

console.log(`${username}, age: ${age}, active: ${isActive}`);
console.log(`Scores: ${scores.join(", ")}`);
console.log(`Tags: ${tags.join(", ")}`);
console.log(`Tuple: ${personTuple[0]} is ${personTuple[1]} years old`);
console.log(`Direction: ${currentDirection}`);
console.log(`Flexible value: ${flexibleValue}`);
logMessage("Hello TypeScript!");
