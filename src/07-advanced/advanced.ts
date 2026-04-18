// ==============================
// 07 - 高级类型
// ==============================

// --- 条件类型 ---
type IsString<T> = T extends string ? "yes" : "no";
type A = IsString<string>; // "yes"
type B = IsString<number>; // "no"

// --- 映射类型 ---
type Readonly_<T> = {
  readonly [K in keyof T]: T[K];
};
type Partial_<T> = {
  [K in keyof T]?: T[K];
};

// --- Record, Pick, Omit 内置类型 ---
type UserRole = "admin" | "editor" | "viewer";
const roleLabels: Record<UserRole, string> = {
  admin: "Administrator",
  editor: "Editor",
  viewer: "Viewer",
};

// --- infer 关键字 ---
type ReturnType_<T> = T extends (...args: any[]) => infer R ? R : never;
type UnpackPromise<T> = T extends Promise<infer U> ? U : T;
type PromiseResult = UnpackPromise<Promise<string>>; // string

// --- 模板字面量类型 ---
type EventName = "click" | "focus";
type EventHandler = `on${Capitalize<EventName>}`; // "onClick" | "onFocus"

// --- 递归类型 ---
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

const nested: DeepReadonly<{ a: { b: number } }> = { a: { b: 1 } };
// nested.a.b = 2; // Error: readonly

// --- satisfies 操作符 (TS 4.9+) ---
const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<string, string | number[]>;
// palette.green 仍然被推断为 string 类型

// --- using 关键字 (TS 5.2+) ---
// function getResource(): Disposable { ... }
// using resource = getResource(); // 离开作用域自动 [Symbol.dispose]()

console.log("=== 07-advanced ===");
console.log(`IsString<string> = ${("yes" as IsString<string>)}`);
console.log(`roleLabels: ${JSON.stringify(roleLabels)}`);
console.log(`palette: ${JSON.stringify(palette)}`);
