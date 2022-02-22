const persons: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // you can explicitly set the type of the tuple
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

let favoriteActivities: string[];
favoriteActiveites = ["Sports"];
console.log(persons.name);

for (const hobby of persons.hobbies) {
  console.log(hobby);
}
