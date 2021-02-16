const person = {
  name: 'Murphy',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};


// greet: () => {
//   console.log('Hi, I am ' + this.name);
// }
// // Yields: 'Hi, I am undefined'
// greet: function() {
//   console.log('Hi, I am ' + this.name);
// }
// // Works

// console.log(person);

person.greet();
