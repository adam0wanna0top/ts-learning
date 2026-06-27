// ==============================
// 07 - 高级类型
// ==============================

// --- 条件类型 ---
type IsString<ValueType> = ValueType extends string ? "yes" : "no";
type StringCheckResult = IsString<string>; // "yes"
type NumberCheckResult = IsString<number>; // "no"

// --- 映射类型 ---
type ReadonlyCopy<ObjectType> = {
  readonly [PropertyName in keyof ObjectType]: ObjectType[PropertyName];
};

type PartialCopy<ObjectType> = {
  [PropertyName in keyof ObjectType]?: ObjectType[PropertyName];
};

// --- Record, Pick, Omit 内置类型 ---
type UserRole = "admin" | "editor" | "viewer";
const roleLabels: Record<UserRole, string> = {
  admin: "Administrator",
  editor: "Editor",
  viewer: "Viewer",
};

// --- infer 关键字 ---
type ReturnValue<FunctionType> = FunctionType extends (...args: any[]) => infer ResultType
  ? ResultType
  : never;
type UnpackPromise<ValueType> = ValueType extends Promise<infer ResolvedValue>
  ? ResolvedValue
  : ValueType;
type PromiseResult = UnpackPromise<Promise<string>>; // string

// --- 模板字面量类型 ---
type EventName = "click" | "focus";
type EventHandler = `on${Capitalize<EventName>}`; // "onClick" | "onFocus"

// --- 递归类型 ---
type DeepReadonly<ObjectType> = {
  readonly [PropertyName in keyof ObjectType]: ObjectType[PropertyName] extends object
    ? DeepReadonly<ObjectType[PropertyName]>
    : ObjectType[PropertyName];
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
console.log(`IsString<string> = ${("yes" as StringCheckResult)}`);
console.log(`IsString<number> = ${("no" as NumberCheckResult)}`);
console.log(`roleLabels: ${JSON.stringify(roleLabels)}`);
console.log(`palette: ${JSON.stringify(palette)}`);
