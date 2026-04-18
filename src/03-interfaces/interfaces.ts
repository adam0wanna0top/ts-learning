// ==============================
// 03 - 接口 (Interfaces)
// ==============================

// 基本接口
interface User {
  readonly id: number;
  name: string;
  email: string;
  age?: number; // 可选属性
}

const user: User = { id: 1, name: "Alice", email: "alice@test.com" };

// 接口继承
interface Employee extends User {
  department: string;
  salary: number;
}

const emp = {
  id: 2,
  name: "Bob",
  email: "bob@company.com",
  department: "Engineering",
  salary: 100000,
} satisfies Employee;

// 接口描述函数
interface SearchFunc {
  (source: string, sub: string): boolean;
}
const contains: SearchFunc = (src, sub) => src.includes(sub);

// 接口描述索引签名
interface StringMap {
  [key: string]: string;
}
const headers: StringMap = { "Content-Type": "application/json" };

// 接口合并 (Declaration Merging)
interface Window {
  myCustomProp: string;
}

// 接口 vs 类型别名: 接口可以被 extends 和 implements，支持声明合并
// 类型别名支持联合类型、交叉类型、基本类型等更灵活的组合

console.log("=== 03-interfaces ===");
console.log(`User: ${user.name} (${user.email})`);
console.log(`Employee: ${emp.name}, dept: ${emp.department}`);
console.log(`contains("hello", "ell") = ${contains("hello", "ell")}`);
