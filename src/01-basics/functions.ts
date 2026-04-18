// ==============================
// 01 - 函数
// ==============================

// 基本函数
function add(a: number, b: number): number {
  return a + b;
}

// 可选参数与默认值
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

function welcome(name: string, greeting: string = "Hi"): string {
  return `${greeting}, ${name}!`;
}

// 剩余参数
function sum(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

// 箭头函数
const multiply = (a: number, b: number): number => a * b;

// 函数类型别名
type MathOp = (a: number, b: number) => number;
const divide: MathOp = (a, b) => a / b;

// 函数重载
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  return typeof value === "number" ? value.toFixed(2) : value.trim();
}

console.log("=== functions ===");
console.log(`add(2, 3) = ${add(2, 3)}`);
console.log(greet("Alice"));
console.log(greet("Alice", "Hey"));
console.log(`sum(1,2,3,4) = ${sum(1, 2, 3, 4)}`);
console.log(`multiply(3,4) = ${multiply(3, 4)}`);
console.log(`format(3.14159) = ${format(3.14159)}`);
console.log(`format("  hello  ") = ${format("  hello  ")}`);
