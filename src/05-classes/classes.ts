// ==============================
// 05 - 类 (Classes)
// ==============================

console.log("=== 05-classes ===");

// 基本类
class Animal {
  public name: string;
  protected speed: number;

  constructor(name: string, speed: number) {
    this.name = name;
    this.speed = speed;
  }

  move(): string {
    return `${this.name} moves at ${this.speed} km/h`;
  }
}

const cat = new Animal("Cat", 30);
console.log(cat.move());

// 继承
class PetDog extends Animal {
  private breed: string;

  constructor(name: string, speed: number, breed: string) {
    super(name, speed);
    this.breed = breed;
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
  public color: string;

  constructor(color: string) {
    this.color = color;
  }

  abstract area(): number;

  describe(): string {
    return `${this.color} shape, area = ${this.area().toFixed(2)}`;
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

console.log(new Circle("red", 5).describe());
console.log(new Rectangle("blue", 4, 6).describe());

// 实现接口
interface Printable {
  toString(): string;
}

class Report implements Printable {
  private title: string;
  private content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  toString(): string {
    return `[Report] ${this.title}: ${this.content}`;
  }
}

console.log(new Report("Q1", "Revenue up 20%").toString());

// 存取器 (getters / setters)
class Temperature {
  private currentCelsius = 0;

  get celsius(): number {
    return this.currentCelsius;
  }

  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error("Below absolute zero!");
    }

    this.currentCelsius = value;
  }

  get fahrenheit(): number {
    return this.currentCelsius * 1.8 + 32;
  }
}

const temp = new Temperature();
temp.celsius = 100;
console.log(`Temperature: ${temp.celsius}°C = ${temp.fahrenheit}°F`);

// 静态成员
class MathUtils {
  static readonly PI = 3.14159;

  static clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }
}
console.log(`PI = ${MathUtils.PI}`);
console.log(`clamp(150, 0, 100) = ${MathUtils.clamp(150, 0, 100)}`);
