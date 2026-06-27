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

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@test.com",
};

// 接口继承
interface Employee extends User {
  department: string;
  salary: number;
}

const employee: Employee = {
  id: 2,
  name: "Bob",
  email: "bob@company.com",
  department: "Engineering",
  salary: 100000,
};

// 接口描述函数
interface SearchFunc {
  (sourceText: string, searchText: string): boolean;
}

const contains: SearchFunc = (sourceText, searchText) => {
  return sourceText.includes(searchText);
};

// 接口描述索引签名
interface StringMap {
  [key: string]: string;
}
const requestHeaders: StringMap = {
  "Content-Type": "application/json",
  Authorization: "Bearer token",
};

// 接口合并 (Declaration Merging)
interface Window {
  myCustomProp: string;
}

// 接口 vs 类型别名: 接口可以被 extends 和 implements，支持声明合并
// 类型别名支持联合类型、交叉类型、基本类型等更灵活的组合

console.log("=== 03-interfaces ===");
console.log(`User: ${user.name} (${user.email})`);
console.log(`Employee: ${employee.name}, dept: ${employee.department}`);
console.log(`contains("hello", "ell") = ${contains("hello", "ell")}`);
console.log(`Request content type: ${requestHeaders["Content-Type"]}`);
