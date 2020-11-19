// let

/*let a = "variable a";
let b = "variable b";
{
  a = "New variable A";
  let b = "local variable B";
  console.log("Scope A:", a);
  console.log("Scope B:", b);
}
console.log(a);
console.log(b);*/

// const

const PORT = 8080;
//PORT = 2020; // error
const array = ["js", "is", "awesome"];
array.push("!");
array[0] = "JavaScript";
console.log(array);

const obj = {};
obj.name = "Alex";
obj.age = 23;
console.log(obj);
obj.age = 23.4;
console.log(obj);

delete obj.age;
console.log(obj);
