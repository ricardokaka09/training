// function person(name: string) {
//   return `hello ${name}`;
function greeter(person) {
    return ("Hello, " +
        person.firstName +
        " " +
        person.lastName +
        " Sinh nam: " +
        person.birdthday);
}
var user = { firstName: "Hung", lastName: "Dang", birdthday: 1999 };
document.querySelector("h1").innerText = greeter(user);
var person = {};
var person2 = {};
var person3 = {
    name: "hung",
    age: 21,
    hobbies: ["Cooking", "Sports"]
};
for (var _i = 0, _a = person3.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
// combine
function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAge = combine(10, 20, "as-number");
var combineName = combine("Hung", "Dang", "as-text");
console.log(combineAge);
console.log(combineName);
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    var value = cb(result);
    console.log(value);
}
addAndHandle(2, 4, function (num) { return num; });
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date.toDateString() + "!");
}
greet("Maddison", new Date());
var names = ["Alice", "Bob", "Eve"];
// let names = ["Dang ", "COng ", "Hung"];
names.forEach(function (s) {
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
var x;
// OK
x = "hello";
// ...
x = "howdy";
