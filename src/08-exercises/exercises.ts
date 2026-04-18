// ==============================
// 08 - 练习题
// ==============================
// 尝试完成以下练习，取消注释并修复类型错误

// --- Exercise 1: 类型注解 ---
// 给变量添加正确的类型
// let message = "Hello";
// let count = 42;
// let items = [1, 2, 3];

// --- Exercise 2: 泛型函数 ---
// 实现一个泛型函数 last，返回数组最后一个元素
// function last<T>(arr: T[]): T | undefined {
//   // your code
// }

// --- Exercise 3: 接口与类 ---
// 定义一个 Entity 接口，包含 id, name, createdAt
// 创建一个 UserEntity 类实现该接口
// interface Entity {
//   // ...
// }

// --- Exercise 4: 类型守卫 ---
// 实现一个函数，根据传入值类型返回不同结果
// function format(input: string | number | boolean): string {
//   // 使用类型守卫处理每种类型
// }

// --- Exercise 5: 工具类型 ---
// 使用 Pick 和 Omit 从 Todo 中派生新类型
// interface Todo {
//   id: number;
//   title: string;
//   description: string;
//   done: boolean;
//   createdAt: Date;
// }
// type TodoCreate = // 使用 Omit 派生
// type TodoUpdate = // 使用 Partial + Omit 派生

// --- Exercise 6: 条件类型 ---
// 实现一个 Flatten<T> 类型
// 如果 T 是数组，返回元素类型，否则返回 T
// type Flatten<T> = // your code
// type Test1 = Flatten<string[]>;  // string
// type Test2 = Flatten<number>;    // number

console.log("=== 08-exercises ===");
console.log("请取消注释并完成练习，然后用 npx ts-node src/08-exercises/exercises.ts 运行");
