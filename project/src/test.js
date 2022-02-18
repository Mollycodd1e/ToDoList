function person() {
  let name = 'Peter';

  return function displayName() {
    console.log(name);
  };
}
let peter = person();
console.log(person())
peter(); // prints 'Peter'
console.log(peter());
