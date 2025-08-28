class People {
  name: string;
  age?: number | undefined;
  static count = 0;
  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
    People.count++;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
  static getCount() {
    console.log(People.count);
  }
}

let xh = new People('xh', 20);
let yl = new People('yl', 20);
xh.sayHello(); // 输出: Hello, my name is xh and I am 20 years old.
People.getCount(); // 输出: 2

3-9