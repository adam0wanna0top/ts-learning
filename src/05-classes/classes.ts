// ==============================
// 05 - 类 (Classes)
// ==============================

// 基本类
class Animal {
  constructor(public name: string, protected speed: number) {}

  move(): string {
    return `${this.name} moves at ${this.speed} km/h`;
  }
}

const cat = new Animal("Cat", 30);
console.log(cat.move());

// 继承
class PetDog extends Animal {
  constructor(name: string, speed: number, private breed: string) {
    super(name, speed);
  }

  bark(): string {
    return `${this.name} (${this.breed}): Woof!`;
  }
}

const dog = new PetDog("Buddy", 20, "Golden Retriever");
console.log(dog.bark());
console.log(dog.move());

// 抽象类
abstract class Shape {
  constructor(public color: string) {}
  abstract area(): number;
  describe(): string {
    return `${this.color} shape, area = ${this.area().toFixed(2)}`;
  }
}

class Circle extends Shape {
  constructor(color: string, private radius: number) {
    super(color);
  }
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(color: string, private w: number, private h: number) {
    super(color);
  }
  area(): number {
    return this.w * this.h;
  }
}

console.log(new Circle("red", 5).describe());
console.log(new Rectangle("blue", 4, 6).describe());

// 实现接口
interface Printable {
  toString(): string;
}

class Report implements Printable {
  constructor(private title: string, private content: string) {}
  toString(): string {
    return `[Report] ${this.title}: ${this.content}`;
  }
}

console.log(new Report("Q1", "Revenue up 20%").toString());

// 存取器 (getters / setters)
class Temperature {
  private _celsius = 0;
  get celsius(): number { return this._celsius; }
  set celsius(value: number) {
    if (value < -273.15) throw new Error("Below absolute zero!");
    this._celsius = value;
  }
  get fahrenheit(): number { return this._celsius * 1.8 + 32; }
}

const temp = new Temperature();
temp.celsius = 100;
console.log(`Temperature: ${temp.celsius}°C = ${temp.fahrenheit}°F`);

// 静态成员
class MathUtils {
  static PI = 3.14159;
  static clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }
}
console.log(`PI = ${MathUtils.PI}`);
console.log(`clamp(150, 0, 100) = ${MathUtils.clamp(150, 0, 100)}`);
