/*const person = {
  surname: "Старк",
  knows: function (what, name) {
    console.log(`Ты ${what} знаешь,${name} ${this.surname}`);
  },
};
person.knows("все", "Бран");

const john = { surname: "Сноу" };

person.knows.call(john, "ничего не", "Джон");
person.knows.apply(john, ["ничего не", "Джон"]);
person.knows.call(john, ...["ничего не", "Джон"]);
person.knows.bind(john, ...["ничего не", "Джон"])();
const bound = person.knows.bind(john, ...["ничего не", "Джон"])();
bound();
*/

/*function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

const alex = new Person("Alex", 20);
*/

/*function logThis() {
  console.log(this);
}
const obj = { nun: 42 };

logThis.call(obj);
logThis.apply(obj);
logThis.bind(obj)();
*/

/*const animal = {
  legs: 4,
  logThis: function () {
    console.log(this);
  },
};
*/

function cat(color) {
  this.color = color;
  console.log("this", this);
  (() => console.log("Arrow this", this))();
}

new cat("red");
