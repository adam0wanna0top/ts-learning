// ==============================
// 02 - 类型系统
// ==============================

// --- 联合类型 (Union) ---
let id: string | number;
id = "abc";
id = 123;

// --- 类型收窄 (Narrowing) ---
function getLength(value: string | number[]): number {
  if (typeof value === "string") {
    return value.length; // TS 知道这里是 string
  }
  return value.length; // TS 知道这里是 number[]
}

// --- 字面量类型 ---
type Status = "active" | "inactive" | "pending";
let userStatus: Status = "active";

type ResponseCode = 200 | 404 | 500;
let code: ResponseCode = 200;

// --- 交叉类型 (Intersection) ---
type Name = { firstName: string; lastName: string };
type Age = { age: number };
type Person = Name & Age;

const personInfo: Person = {
  firstName: "Alice",
  lastName: "Smith",
  age: 25,
};

// --- 类型别名 (Type Alias) ---
type Point = { x: number; y: number };
type ID = string | number;
type Callback = (data: string) => void;

// --- typeof 和 keyof ---
const config = { host: "localhost", port: 3000 };
type Config = typeof config;
type ConfigKeys = keyof Config; // "host" | "port"

console.log("=== 02-types ===");
console.log(`ID: ${id}`);
console.log(`getLength("hello") = ${getLength("hello")}`);
console.log(`getLength([1,2,3]) = ${getLength([1, 2, 3])}`);
console.log(`Status: ${userStatus}`);
console.log(`Person: ${personInfo.firstName} ${personInfo.lastName}, age ${personInfo.age}`);
