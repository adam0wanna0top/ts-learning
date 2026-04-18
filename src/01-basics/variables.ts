// ==============================
// 01 - TypeScript 基础
// ==============================

// --- 变量声明 ---
let username: string = "Alice";
let age: number = 25;
let isActive: boolean = true;

// 数组
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

// 元组 - 固定长度和类型的数组
let personTuple: [string, number] = ["Bob", 30];

// 枚举
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
let dir: Direction = Direction.Up;

// any - 跳过类型检查（尽量避免使用）
let data: any = "hello";
data = 42;

// unknown - 安全版的 any
let input: unknown = "test";
if (typeof input === "string") {
  console.log(input.toUpperCase()); // 类型收窄后才可使用
}

// void - 无返回值
function log(msg: string): void {
  console.log(msg);
}

// never - 永远不会返回
function throwError(msg: string): never {
  throw new Error(msg);
}

console.log("=== 01-basics ===");
console.log(`${username}, age: ${age}, active: ${isActive}`);
console.log(`Direction: ${dir}`);
log("Hello TypeScript!");
