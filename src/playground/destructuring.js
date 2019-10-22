// const person = {
//   name: "Clairette",
//   age: 11,
//   location: {
//     city: "Strasbourg",
//     temperature: 23
//   }
// };

// const { age, name: firstName = "Anonymous" } = person;
// console.log(`${firstName} is ${age}.`);

// const { temperature: temp, city } = person.location;
// if (city && temp) {
//   console.log(`It's ${temp} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     // name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(`${publisherName}`);

const address = [
  // "1299 S Juniper Street",
  // "Philadelphia"
  // "Pennsylvania",
  // "19147"
];

const [, , yourState = "Strasbourg"] = address;

console.log(`You are in ${yourState}.`);

const item = ["Coffee (iced)", "$2.00", "$3.50", "$2.75"];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
