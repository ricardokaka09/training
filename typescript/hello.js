// function person(name: string) {
//   return `hello ${name}`;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x());
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: function () { return "hung"; }, y: 100 });
function isFish(pet) {
    // console.log((pet as Bird).fly);
    // if ((pet as Fish).swim !== undefined) {
    //   console.log(pet.swim);
    // }
    console.log(pet.swim);
    return pet.swim !== undefined;
}
var roFish = isFish({ swim: function () { return "Hung"; } });
var saoBird = isFish({ fly: function () { return "chim sao"; } });
console.log(roFish);
console.log(saoBird);
function getArea(shape) {
    var pi = Math.PI;
    if (shape.kind === "circle")
        return (Math.PI * Math.pow(shape.radius, 2)).toFixed(2);
    return shape.sideLength * shape.sideLength;
}
console.log(getArea({ kind: "circle", radius: 2 }));
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function fn_2(someArg) {
    return true;
}
// doSomething({description: 'Hung',fn_2})
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement(["dnag", 1, 2, 3, "hung"]));
function map(arr, func) {
    return arr.map(func);
}
console.log(map(["12", "2", "4", "5"], function (n) { return +n * 2; }));
function combine_2(arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1), arr2);
}
var arr_combine = combine_2([1, 2, 3], ["hung", "cong", "hung"]);
console.log(arr_combine);
function filter1(arr, func) {
    return arr.filter(func);
}
console.log(filter1([1, 2, 3, 4], function (n) { return (n > 1 ? true : false); }));
// optionalFunc(1);
function optionalCallback(arr, callBack) {
    for (var i = 0; i <= arr.length; i++) {
        callBack(arr[i], i);
    }
}
var stringNum_1 = ["hung", 2, true, true, true, false];
console.log(stringNum_1);
// CLASSES
/**----------------------------------------- */
var Point1 = /** @class */ (function () {
    function Point1() {
        this.k = 4;
        this.a = 1;
        this.b = 2;
        // x: number;
        // y: number;
        // constructor(x: number, y: number){
        //   this.x = x;
        //   this.y = y;
        // }
    }
    return Point1;
}());
var Point2 = /** @class */ (function (_super) {
    __extends(Point2, _super);
    function Point2() {
        var _this = _super.call(this) || this;
        _this._length = 1;
        console.log(_this.k);
        return _this;
    }
    Point2.prototype.scale = function (a, b) {
        this.a += a;
        this.b += b;
    };
    return Point2;
}(Point1));
var point__2 = new Point2();
point__2.scale(1, 2);
console.log(point__2.a + "\n\n" + point__2.b);
/**------------X--------------X--------------- */
var some = /** @class */ (function () {
    function class_1(value) {
        var _this = this;
        // Arrow function
        this.getContent = function () {
            return _this.content;
        };
        this.content = value;
    }
    // this Type
    class_1.prototype.check = function (th) {
        return th.content === this.content;
    };
    return class_1;
}());
var sm = new some("hung");
