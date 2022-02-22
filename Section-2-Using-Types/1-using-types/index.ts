//core types

//number: 1 , 5.3 All numbers, no differeentiation between integeres or floats
//string: 'Hi', "h1" All text values
//boolean: true, false, Just these two, no "truthy" or "falsy" values

//tsc app.ts compiles typescript code

function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

//typescript can help you only during development, not on runtime
//it doesnt change runtime number
