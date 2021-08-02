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
