/*let a = 42;
let b = a;
b++;
console.log(a);
console.log(b);*/

/*let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
console.log(b);

let c = [1, 2, 3];
let p = a.concat(); // клон массива
b.push(4);
console.log(c);
console.log(p);
*/

let a = [1, 2, 3];
let b = a;
b.push(4);

let c = [1, 2, 3, 4];

console.log(a === b);
console.log(a === c);
