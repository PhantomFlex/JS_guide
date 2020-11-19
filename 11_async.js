const first = () => console.log("first");
const second = () => console.log("second");
const third = () => console.log("third");

first();
second();
third();

// результат вызова 1-2-3

first();
setTimeout(second, 0);
third();

// результат 1-3-2
