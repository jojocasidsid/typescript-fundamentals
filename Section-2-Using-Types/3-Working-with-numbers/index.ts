//core types

//number: 1 , 5.3 All numbers, no differeentiation between integeres or floats
//string: 'Hi', "h1" All text values
//boolean: true, false, Just these two, no "truthy" or "falsy" values

//tsc app.ts compiles typescript code

function adds(n1: number, n2: number, showResult: boolean) {
  if (showResult) {
    console.log("show");
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
//dont explicitly assign types down here

const result = adds(number1, number2, printResult);
console.log(result);

//typescript can help you only during development, not on runtime
//it doesnt change runtime number

// In TypeScript, you work with types like string or number all the times.
// Important: It is string and number (etc.), NOT String, Number etc.
// The core primitive types in TypeScript are all lowercase!
