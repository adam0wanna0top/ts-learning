// ==============================
// 06 - 模块 (Modules)
// ==============================

// --- 导出 ---
// math-utils.ts (示例)
export function add(a: number, b: number): number {
  return a + b;
}
export function multiply(a: number, b: number): number {
  return a * b;
}
export const PI = 3.14159;

// 默认导出
export default class Calculator {
  static add = add;
  static multiply = multiply;
}

// --- 导入 ---
// import Calculator, { add, multiply, PI } from "./math-utils";

// 重命名导出/导入
// export { add as sum };
// import { add as sum } from "./math-utils";

// 命名空间 (namespace) - 旧语法，推荐用 ES Module
// namespace Validation {
//   export interface StringValidator {
//     isValid(s: string): boolean;
//   }
// }

// --- 动态导入 ---
// const module = await import("./some-module");

// --- 声明文件 (.d.ts) ---
// declare module "some-lib" {
//   export function doSomething(value: string): number;
// }

console.log("=== 06-modules ===");
console.log(`add(2,3) = ${add(2, 3)}`);
console.log(`multiply(4,5) = ${multiply(4, 5)}`);
console.log(`PI = ${PI}`);
