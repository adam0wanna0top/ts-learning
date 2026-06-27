// ==============================
// 08 - 练习题
// ==============================
// 建议练习方式：
// 1. 一次只取消一个练习的注释。
// 2. 根据题目补全类型或实现。
// 3. 运行 `npx ts-node src/08-exercises/exercises.ts` 检查结果。
// 4. 遇到卡点时，再对照 `solutions.ts`。

// --- Exercise 1: 类型注解 ---
// 目标：给变量添加正确的类型注解。
// let message = "Hello";
// let count = 42;
// let items = [1, 2, 3];

// --- Exercise 2: 泛型函数 ---
// 目标：实现一个泛型函数 lastItem，返回数组最后一个元素。
// function lastItem<ElementType>(itemsToRead: ElementType[]): ElementType | undefined {
//   // your code
// }

// --- Exercise 3: 接口与类 ---
// 目标：定义一个 Entity 接口，包含 id、name、createdAt。
// 然后创建一个 UserEntity 类实现该接口。
// interface Entity {
//   // ...
// }

// --- Exercise 4: 类型守卫 ---
// 目标：实现一个函数，根据传入值类型返回不同结果。
// function format(input: string | number | boolean): string {
//   // 使用类型守卫处理每种类型
// }

// --- Exercise 5: 工具类型 ---
// 目标：使用 Pick、Omit、Partial 从 Todo 中派生新类型。
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
// 目标：实现一个 Flatten<ValueType> 类型。
// 如果 ValueType 是数组，返回数组元素类型；否则返回 ValueType 本身。
// type Flatten<ValueType> = // your code
// type StringResult = Flatten<string[]>;  // string
// type NumberResult = Flatten<number>;    // number

console.log("=== 08-exercises ===");
console.log("请取消注释并完成练习，然后用 npx ts-node src/08-exercises/exercises.ts 运行");
