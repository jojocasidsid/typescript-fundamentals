//core types

//number: 1 , 5.3 All numbers, no differeentiation between integeres or floats
//string: 'Hi', "h1" All text values
//boolean: true, false, Just these two, no "truthy" or "falsy" values

//tsc app.ts compiles typescript code

function add(n1: number, n2: number) {
  if (typeof n1 === "number") {
    //we are checking something that can be avoided with typescript development
    //typescript is statically typed
    // this one affects the runtime
    //typescipt is not built in javascript engine
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

//typescript can help you only during development, not on runtime
//it doesnt change runtime number

// In TypeScript, you work with types like string or number all the times.
// Important: It is string and number (etc.), NOT String, Number etc.
// The core primitive types in TypeScript are all lowercase!
