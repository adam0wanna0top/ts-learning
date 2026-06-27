// ==============================
// 01 - 函数
// ==============================

// 基本函数
function add(leftNumber: number, rightNumber: number): number {
  return leftNumber + rightNumber;
}

// 可选参数与默认值
function greet(name: string, greeting?: string): string {
  if (greeting === undefined) {
    return `Hello, ${name}!`;
  }

  return `${greeting}, ${name}!`;
}

function welcome(name: string, greeting: string = "Hi"): string {
  return `${greeting}, ${name}!`;
}

// 剩余参数
function sum(...numbersToAdd: number[]): number {
  let total = 0;

  for (const numberToAdd of numbersToAdd) {
    total += numberToAdd;
  }

  return total;
}

// 箭头函数
const multiply = (leftNumber: number, rightNumber: number): number => {
  return leftNumber * rightNumber;
};

// 函数类型别名
type MathOperation = (leftNumber: number, rightNumber: number) => number;
const divide: MathOperation = (leftNumber, rightNumber) => {
  return leftNumber / rightNumber;
};

// 函数重载
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  if (typeof value === "number") {
    return value.toFixed(2);
  }

  return value.trim();
}

console.log("=== functions ===");
console.log(`add(2, 3) = ${add(2, 3)}`);
console.log(greet("Alice"));
console.log(greet("Alice", "Hey"));
console.log(welcome("Bob"));
console.log(`sum(1,2,3,4) = ${sum(1, 2, 3, 4)}`);
console.log(`multiply(3,4) = ${multiply(3, 4)}`);
console.log(`divide(10,2) = ${divide(10, 2)}`);
console.log(`format(3.14159) = ${format(3.14159)}`);
console.log(`format("  hello  ") = ${format("  hello  ")}`);
