// __proto__
// Object.getPrototypeOf()

/*function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.voice = function () {
  console.log(`Cat ${this.name} says meow`);
};

const cat = new Cat("vjik", "red");
console.log(Cat.prototype);
console.log(cat.__proto__);
console.log(cat.__proto__ === Cat.prototype);
cat.voice();
*/

/*function Person() {}
Person.prototype.legs = 2;
Person.prototype.skin = "da";

const person = new Person();
person.name = "Alex";

console.log("skin" in person);
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("skin")); // false оно в прототипе
*/

//Object.create()
const proto = { year: 2020 };
const myYear = Object.create(proto);

console.log(myYear.year);
proto.year = 2021; // изменение в самом прототипе
console.log(myYear.year);

//console.log(myYear.hasOwnProperty("year")); //false
//console.log(myYear.__proto__ === proto); // true
