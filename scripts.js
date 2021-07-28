// Raw string access

function quux(strings, ...values) {
  console.log(strings[0]);
  console.log(values);
  console.log(strings.raw[0]);
  // strings[0] === "foo\n";
  // strings[1] === "bar";
  // strings.raw[0] === "foo\\n";
  // strings.raw[1] === "bar";
  // values[0] === 42;
}
quux`foo\n\n\n\n${42}bar`;

// String.raw`foo\n${ 42 }bar` === "foo\\n42bar";

console.log(`hungdang\n ${20} tuoi`);

console.log(0b111110111);

console.log("𠮷".match(/./u)[0].length);

for (let codepoint of "𠮷") console.log(codepoint);

/**-----------X -----------------X  */

// INTERATOR & FOR-OF OPERATOR
/**------------------------------------------------- */

let tongchan = {
  [Symbol.iterator]() {
    let sum = 0;
    return {
      next() {
        sum += 2;
        //  [ pre, cur ] = [ cur, pre + cur ];
        return { done: false, value: sum };
      },
    };
  },
};

for (let n of tongchan) {
  if (n > 100) {
    console.log(n);
    break;
  }
  // console.log(n);
}

// the yield keyword
/**----------------------------------------------------- */

// create genarator function
function* foo(index) {
  while (index < 3) {
    yield index;
    index++;
  }
}

const iterator = foo(0);

console.log(iterator.next().value); // 0
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // underfind because condition index < 3

/**--------------X--------------------X------------------- */

//GENERATOR MATCHING
/**---------X-----------------------------X----------- */

let fibonacci = function* (numbers) {
  let pre = 0,
    cur = 1;
  while (numbers-- > 0) {
    [pre, cur] = [cur, pre + cur];
    yield cur;
  }
};

for (let n of fibonacci(10)) console.log(n);
const numbers = [...fibonacci(10)];
console.log(numbers);

const [num1, num2, ...other] = [...fibonacci(10)]; // == const [ num1 , num2 , ...other ] = fibonacci(10)
// num1 = 1 , num2 = 2, other = [ the remaining numbers ]
/** ---------X ---------------X   */

//WEAKMAP & WEAKSET
/* ---------------- */
let isMarked = new WeakSet();
let attachedData = new WeakMap();

class Node {
  constructor(name) {
    this.name = name;
  }
  mark() {
    isMarked.add(this);
  }
  unmark() {
    isMarked.delete(this);
  }
  marked() {
    return isMarked.has(this);
  }
  set data(data) {
    attachedData.set(this, data);
  }
  get data() {
    return attachedData.get(this);
  }
}

let person = new Node("Hung");
console.log(person);

person.mark(); // true
// person.unmark(); // false
// person.marked();
console.log(person.marked());

person.data = "dang";
console.log(person.data);

console.log(isMarked.has(person));
console.log(attachedData.has(person));
isMarked.has(person);
attachedData.has(person);
person = null; /* remove only reference to person */
attachedData.has(person); // false
isMarked.has(person); // false

/*------X ------X---------*/

// GENERATOR CONTROL-FLOW
/**--------------------------------------------- */
//  generic asynchronous control-flow driver
function async(proc, ...params) {
  let iterator = proc(...params);
  return new Promise((resolve, reject) => {
    let loop = (value) => {
      let result;
      try {
        result = iterator.next(value);
      } catch (err) {
        reject(err);
      }
      if (result.done) resolve(result.value);
      else if (
        typeof result.value === "object" &&
        typeof result.value.then === "function"
      )
        result.value.then(
          (value) => {
            loop(value);
          },
          (err) => {
            reject(err);
          }
        );
      else loop(result.value);
    };
    loop();
  });
}

//  application-specific asynchronous builder
function makeAsync(text, after) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(text), after);
  });
}

//  application-specific asynchronous procedure
async(function* (greeting) {
  let foo = yield makeAsync("foo", 300);
  let bar = yield makeAsync("bar", 200);
  let baz = yield makeAsync("baz", 100);
  return `${greeting} ${foo} ${bar} ${baz}`;
}, "Hello").then((msg) => {
  console.log("RESULT:", msg); // "Hello foo bar baz"
});

/**---------X  ------------X ------------------------X ----------*/

// SET DATA-STRUCTURE
/** -------------------------------------------------------- */

let s = new Set(); // use add() delete()  has()
s.add("DANG").add("CONG").add("HUNG");

console.log(s);
for (let key of s.entries()) console.log(key); //
// s.size === 2;
// s.has("hello") === true;
for (let key of s.values()) // insertion order
  console.log(key);

/** -----------------------X----------------X----------------- */

// MAP DATA-STRUCTURE
/** -------------------------------------------------------- */

let map = new Map(); // dung set(key , value) , get(key)
map.set("ho", "Dang");
map.set("ten", "Hung");
console.log(map.get("ten"));
// map.get("ten");

console.log(map);
for (let key of map.entries()) console.log(key); //
// s.size === 2;
// s.has("hello") === true;
// for (let key of s.values()) // insertion order
//   console.log(key);

/** -----------------------X----------------X----------------- */

// NEW BUILT-IN METHOD
/**----------------------------------------------------------- */

let string = "h".repeat(4 * 2); // hhhhhhhh
console.log(string);
"foo".repeat(3);

console.log("hello".startsWith("llo", 2)); // true

console.log("hello".endsWith("llo", 2)); // false)
console.log("helloell".includes("ell", 2)); //true
"hello".startsWith("ello", 1); // true
"hello".endsWith("hell", 4); // true
"hello".includes("ell"); // true
"hello".includes("ell", 1); // true
"hello".includes("ell", 2); // false

Number.isNaN(42) === false;
Number.isNaN(NaN) === true;

Number.isFinite(Infinity) === false;
Number.isFinite(-Infinity) === false;
Number.isFinite(NaN) === false;
Number.isFinite(123) === true;

Number.isSafeInteger(42) === true;
Number.isSafeInteger(9007199254740992) === false;

console.log(0.1 + 0.2 === 0.3); // false
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true
console.log(Number.EPSILON); // 2.220446049250313e-16

console.log(Math.trunc(42.7)); // 42
console.log(Math.trunc(0.1)); // 0
console.log(Math.trunc(-0.1)); // -0

console.log(Math.sign(7)); // 1
console.log(Math.sign(0)); // 0
console.log(Math.sign(-0)); // -0
console.log(Math.sign(-7)); // -1
console.log(Math.sign(NaN)); // NaN
/**-------------------X----------------X------------------------ */

// PROMISE
/**---------------------------------------------------------- */
function describe(name, resolve) {
  if (name === "cho") resolve(`day là con ${name} co 4 chan`);
  else resolve(`day la con ${name} co 2 chan`);
}

function animal(name) {
  return new Promise((resolve, reject) => {
    describe(name, resolve);
  });
}

Promise.all([animal("cho"), animal("meo")]).then((data) => {
  let [cho, meo] = data;
  console.log(cho);
  console.log(meo);
});
// animal("cho").then((data) => console.log(data));

/**-----------------X-------------------------X---------------- */

//REFLECTION
/*-----------------------------------------------------------*/

let obj = { ten: "hung" };
Object.defineProperty(obj, 1999, { sex: "male" });
obj[Symbol("ho")] = "dang";
let reflec = Reflect.ownKeys(obj);
console.log(reflec[2]);

/*--------------------X-----------------X----------------------*/
