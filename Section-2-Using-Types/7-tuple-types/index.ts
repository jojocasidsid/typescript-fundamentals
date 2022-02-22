// added by typescript ;; Fixed length array
// you could explicitly assign type object
// just by assigning an empty type, typescript will have an error
// you could restrict type to one specific value

const persons = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

let favoriteActivities: string[]; //means use any type
favoriteActiveites = ["Sports"];
console.log(persons.name);
//property nickname does not exist
//types and assignments are not part of javascript

for (const hobby of persons.hobbies) {
  console.log(hobby);
}
