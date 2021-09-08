// function person(name: string) {
//   return `hello ${name}`;

// }
// let hung = person("Hung");

// document.querySelector("h1").innerText = hung;
// document.body.textContent = person("Hung");

// class animal {
//   id: number;
//   name: string;
//   species: string;
//   constructor(id: number, name: string, species: string) {
//     this.id = id;
//     this.name = name;
//     this.species = species;
//   }
// }

interface Person {
  firstName: string;
  lastName: string;
  birdthday: number;
}

function greeter(person: Person) {
  return (
    "Hello, " +
    person.firstName +
    " " +
    person.lastName +
    " Sinh nam: " +
    person.birdthday
  );
}

let user = { firstName: "Hung", lastName: "Dang", birdthday: 1999 };

document.querySelector("h1")!.innerText = greeter(user);

let person: object = {};
let person2: {} = {};

let person3 = {
  name: "hung",
  age: 21,
  hobbies: ["Cooking", "Sports"],
};

for (const hobby of person3.hobbies) {
  console.log(hobby.toUpperCase());
}

// combine

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combineAge = combine(10, 20, "as-number");
const combineName = combine("Hung", "Dang", "as-text");
console.log(combineAge);
console.log(combineName);

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  let value = cb(result);
  console.log(value);
}

addAndHandle(2, 4, (num) => num);

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());

const names = ["Alice", "Bob", "Eve"];
// let names = ["Dang ", "COng ", "Hung"];

names.forEach((s) => {
  console.log(s.toUpperCase());
});

// Contextual typing for function
// names.forEach(function (s) {
//   console.log(s.toUpperCase());
//   // console.log(s.toUppercase());
// });

// Contextual typing also applies to arrow functions
// names.forEach((s) => {
//   console.log(s.toUpperCase());
// });

let x: "hello" | "howdy";
// OK
x = "hello";
// ...
x = "howdy";

// Types aliases
/**-------------------------------------- */
type Point = {
  x: () => void;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x());
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: () => "hung", y: 100 });
/**------------X-----------X--------------- */

type Fish = {
  swim: () => void;
};
type Bird = {
  fly: () => void;
};
declare function getSmallPet(): Fish | Bird;
function isFish(pet: Fish | Bird): pet is Fish {
  // console.log((pet as Bird).fly);
  // if ((pet as Fish).swim !== undefined) {
  //   console.log(pet.swim);
  // }
  console.log((pet as Fish).swim);
  return (pet as Fish).swim !== undefined;
}

let roFish = isFish({ swim: () => "Hung" });
let saoBird = isFish({ fly: () => "chim sao" });
console.log(roFish);
console.log(saoBird);

/** --------------------- */

// let pet = getSmallPet();

// if (isFish(pet)) {
//   pet.swim();
// } else {
//   pet.fly();
// }
// Error because getSmallPet is not function in hello.js

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  let pi = Math.PI;
  if (shape.kind === "circle") return (Math.PI * shape.radius ** 2).toFixed(2);

  return shape.sideLength * shape.sideLength;
}

console.log(getArea({ kind: "circle", radius: 2 }));

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
function fn_2(someArg: number): boolean {
  return true;
}
// doSomething({description: 'Hung',fn_2})

function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}

console.log(firstElement(["dnag", 1, 2, 3, "hung"]));

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

console.log(map(["12", "2", "4", "5"], (n) => +n * 2));

function combine_2<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return [...arr1, ...arr2];
}
let arr_combine = combine_2<string | number>(
  [1, 2, 3],
  ["hung", "cong", "hung"]
);
console.log(arr_combine);

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}
console.log(filter1([1, 2, 3, 4], (n) => (n > 1 ? true : false)));

declare function optionalFunc(x?: number): void;
// optionalFunc(1);

function optionalCallback(
  arr: any[],
  callBack: (arg: any, index?: number) => void
) {
  for (let i = 0; i <= arr.length; i++) {
    callBack(arr[i], i);
  }
}

type stringNumberPair = [string, number, ...boolean[]];

const stringNum_1: stringNumberPair = ["hung", 2, true, true, true, false];
console.log(stringNum_1);

// CLASSES
/**----------------------------------------- */

class Point1 {
  k = 4;
  a = 1;
  b = 2;
  // x: number;
  // y: number;
  // constructor(x: number, y: number){
  //   this.x = x;
  //   this.y = y;
  // }
}

class Point2 extends Point1 {
  _length = 1;
  constructor() {
    super();
    console.log(this.k);
  }
  scale(a: number, b: number): void {
    this.a += a;
    this.b += b;
  }

  // getter & setter
  // get length() {
  //   return this._length;
  // }
  // set length(value) {
  //   this._length = value;
  // }
}

let point__2 = new Point2();
point__2.scale(1, 2);
console.log(point__2.a + "\n\n" + point__2.b);

/**------------X--------------X--------------- */

const some = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
  // this Type
  check(th: this) {
    return th.content === this.content;
  }

  // Arrow function
  getContent = () => {
    return this.content;
  };
};

let sm = new some("hung");
