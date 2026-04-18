// ==============================
// 04 - 泛型 (Generics)
// ==============================

// 基本泛型函数
function identity<T>(value: T): T {
  return value;
}
console.log(identity<string>("hello"));
console.log(identity<number>(42));

// 泛型数组
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}
console.log(`first([1,2,3]) = ${first([1, 2, 3])}`);

// 多个泛型参数
function map<T, U>(arr: T[], fn: (item: T) => U): U[] {
  return arr.map(fn);
}
const lengths = map(["hello", "world"], (s) => s.length);
console.log(`lengths: ${JSON.stringify(lengths)}`);

// 泛型约束 (extends)
interface HasLength {
  length: number;
}
function logLength<T extends HasLength>(value: T): void {
  console.log(`length: ${value.length}`);
}
logLength("hello");
logLength([1, 2, 3]);
// logLength(123); // Error: number 没有 length

// keyof 约束
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const obj = { name: "Alice", age: 25 };
console.log(`getProperty(obj, "name") = ${getProperty(obj, "name")}`);

// 泛型接口
interface Repository<T> {
  findAll(): T[];
  findById(id: number): T | undefined;
  create(item: T): T;
}

// 泛型类
class DataStore<T> {
  private items: T[] = [];

  add(item: T): void { this.items.push(item); }
  getAll(): T[] { return [...this.items]; }
  filter(predicate: (item: T) => boolean): T[] {
    return this.items.filter(predicate);
  }
}

const store = new DataStore<number>();
store.add(10);
store.add(20);
store.add(30);
console.log(`store: ${JSON.stringify(store.getAll())}`);
console.log(`store.filter(x => x > 15): ${JSON.stringify(store.filter((x) => x > 15))}`);

// 内置工具类型演示
interface Todo {
  title: string;
  description: string;
  done: boolean;
}

type PartialTodo = Partial<Todo>;    // 所有属性变可选
type RequiredTodo = Required<Todo>;  // 所有属性变必填
type ReadonlyTodo = Readonly<Todo>;  // 所有属性只读
type TodoPreview = Pick<Todo, "title" | "done">; // 只取部分属性
type TodoInfo = Omit<Todo, "done">;  // 排除部分属性

const preview: TodoPreview = { title: "Learn TS", done: false };
console.log(`TodoPreview: ${JSON.stringify(preview)}`);
