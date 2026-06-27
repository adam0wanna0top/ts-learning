// ==============================
// 02 - 类型系统
// ==============================

// --- 联合类型 (Union) ---
let identifier: string | number;
identifier = "abc";
identifier = 123;

// --- 类型收窄 (Narrowing) ---
function getValueLength(value: string | number[]): number {
  if (typeof value === "string") {
    console.log("当前 value 是字符串");
    return value.length; // TS 知道这里是 string
  }

  console.log("当前 value 是数字数组");
  return value.length; // TS 知道这里是 number[]
}

// --- 字面量类型 ---
type Status = "active" | "inactive" | "pending";
let userStatus: Status = "active";

type ResponseCode = 200 | 404 | 500;
let responseCode: ResponseCode = 200;

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
type TextCallback = (text: string) => void;

const point: Point = { x: 10, y: 20 };
const numericId: ID = 1001;
const printText: TextCallback = (text) => {
  console.log(`Callback received: ${text}`);
};

// --- typeof 和 keyof ---
const serverConfig = { host: "localhost", port: 3000 };
type ServerConfig = typeof serverConfig;
type ServerConfigKey = keyof ServerConfig; // "host" | "port"

function getConfigValue(configKey: ServerConfigKey): ServerConfig[ServerConfigKey] {
  return serverConfig[configKey];
}

console.log("=== 02-types ===");
console.log(`Identifier: ${identifier}`);
console.log(`getValueLength("hello") = ${getValueLength("hello")}`);
console.log(`getValueLength([1,2,3]) = ${getValueLength([1, 2, 3])}`);
console.log(`Status: ${userStatus}`);
console.log(`Response code: ${responseCode}`);
console.log(`Person: ${personInfo.firstName} ${personInfo.lastName}, age ${personInfo.age}`);
console.log(`Point: (${point.x}, ${point.y})`);
console.log(`Numeric ID: ${numericId}`);
printText("type alias example");
console.log(`Config host: ${getConfigValue("host")}`);
