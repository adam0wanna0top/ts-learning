// ==============================
// 02 - 类型守卫 (Type Guards)
// ==============================

// typeof
function double(value: string | number): string | number {
  if (typeof value === "number") {
    return value * 2;
  }
  return value.repeat(2);
}

// instanceof
class DogAnimal {
  bark() { return "Woof!"; }
}
class CatAnimal {
  meow() { return "Meow!"; }
}
function speak(animal: DogAnimal | CatAnimal): string {
  if (animal instanceof DogAnimal) return animal.bark();
  return animal.meow();
}

// in 操作符
interface Fish { swim(): void }
interface Bird { fly(): void }
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
}

// 自定义类型守卫 (is)
interface Admin { role: "admin"; permissions: string[] }
interface AppUser { role: "user"; email: string }
type Account = Admin | AppUser;

function isAdmin(account: Account): account is Admin {
  return account.role === "admin";
}

function getAccess(account: Account): string {
  if (isAdmin(account)) {
    return `Admin permissions: ${account.permissions.join(", ")}`;
  }
  return `User email: ${account.email}`;
}

console.log("=== type-guards ===");
console.log(`double(5) = ${double(5)}`);
console.log(`double("ab") = ${double("ab")}`);
console.log(`Dog: ${speak(new DogAnimal())}`);
console.log(`Cat: ${speak(new CatAnimal())}`);
console.log(getAccess({ role: "admin", permissions: ["read", "write"] }));
console.log(getAccess({ role: "user", email: "alice@example.com" }));
