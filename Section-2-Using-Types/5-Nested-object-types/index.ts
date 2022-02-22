// Nested Objects & Types
// Of course object types can also be created for nested objects.

// Let's say you have this JavaScript object:
// This would be the type of such an object:

const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

// So you have an object type in an object type so to say.
