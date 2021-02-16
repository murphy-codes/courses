const person = {
  name: 'Murphy',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const hobbies = ['Reading', 'Learning'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
// const copiedArray = hobbies.slice();
const copiedArray = [...hobbies];
console.log(copiedArray);

// const toArray = (arg1, arg2, arg3, arg4) => {
//   return [arg1, arg2, arg3, arg4];
// };
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
