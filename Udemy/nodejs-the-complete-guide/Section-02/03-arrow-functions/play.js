const name = 'Murphy';
let age = 29;
const hasHobbies = true;

age = 30;

// const summarizeUser = function(userName, userAge, userHasHobby)
const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ', and the user has hobbies: ' +
    userHasHobby
  );
};

// const add = (a, b) => a + b; // sama as // => { return a + b; };
// const addOne = a => a + 1; // same as // (a) => a + 1;
const addOneTwo = () => 1 + 2;

// console.log(add(1, 2));
// console.log(addOne(1));
console.log(addOneTwo());

console.log(summarizeUser(name, age, hasHobbies));
