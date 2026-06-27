// ==============================
// 04 - 泛型 (Generics)
// ==============================

console.log("=== 04-generics ===");

// 基本泛型函数
function identity<ValueType>(value: ValueType): ValueType {
  return value;
}
console.log(`identity<string>("hello") = ${identity<string>("hello")}`);
console.log(`identity<number>(42) = ${identity<number>(42)}`);

// 泛型数组
function first<ElementType>(items: ElementType[]): ElementType | undefined {
  return items[0];
}
console.log(`first([1,2,3]) = ${first([1, 2, 3])}`);

// 多个泛型参数
function mapItems<InputType, OutputType>(
  items: InputType[],
  transform: (item: InputType) => OutputType,
): OutputType[] {
  return items.map(transform);
}

const wordLengths = mapItems(["hello", "world"], (word) => {
  return word.length;
});
console.log(`wordLengths: ${JSON.stringify(wordLengths)}`);

// 泛型约束 (extends)
interface HasLength {
  length: number;
}
function logLength<ValueType extends HasLength>(value: ValueType): void {
  console.log(`length: ${value.length}`);
}
logLength("hello");
logLength([1, 2, 3]);
// logLength(123); // Error: number 没有 length

// keyof 约束
function getProperty<ObjectType, KeyType extends keyof ObjectType>(
  objectValue: ObjectType,
  key: KeyType,
): ObjectType[KeyType] {
  return objectValue[key];
}

const userProfile = { name: "Alice", age: 25 };
console.log(`getProperty(userProfile, "name") = ${getProperty(userProfile, "name")}`);

// 泛型接口
interface Repository<EntityType> {
  findAll(): EntityType[];
  findById(id: number): EntityType | undefined;
  create(item: EntityType): EntityType;
}

// 泛型类
class DataStore<ItemType> {
  private items: ItemType[] = [];

  add(item: ItemType): void {
    this.items.push(item);
  }

  getAll(): ItemType[] {
    return [...this.items];
  }

  filter(predicate: (item: ItemType) => boolean): ItemType[] {
    return this.items.filter(predicate);
  }
}

const store = new DataStore<number>();
store.add(10);
store.add(20);
store.add(30);
console.log(`store: ${JSON.stringify(store.getAll())}`);
console.log(
  `store.filter(storedNumber => storedNumber > 15): ${JSON.stringify(
    store.filter((storedNumber) => {
      return storedNumber > 15;
    }),
  )}`,
);

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

const draftTodo: PartialTodo = { title: "Learn TS" };
const completeTodo: RequiredTodo = {
  title: "Learn TS",
  description: "Read the generics lesson",
  done: false,
};
const readonlyTodo: ReadonlyTodo = completeTodo;
const preview: TodoPreview = { title: "Learn TS", done: false };
const todoInfo: TodoInfo = {
  title: "Learn TS",
  description: "Practice utility types",
};

console.log(`PartialTodo: ${JSON.stringify(draftTodo)}`);
console.log(`RequiredTodo: ${JSON.stringify(completeTodo)}`);
console.log(`ReadonlyTodo: ${JSON.stringify(readonlyTodo)}`);
console.log(`TodoPreview: ${JSON.stringify(preview)}`);
console.log(`TodoInfo: ${JSON.stringify(todoInfo)}`);
