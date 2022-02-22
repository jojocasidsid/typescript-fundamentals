// you could explicitly assign type object
// just by assigning an empty type, typescript will have an error
// you could restrict type to one specific value

const person: { name: string; age: number } = {
  name: "Maximilian",
  age: 30,
};

console.log(person.name);
//property nickname does not exist
//types and assignments are not part of javascript
