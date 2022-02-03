const num1 = "20";
const num2 = "20.2";
const num3 = "Uno";
const num4 = 20;

console.log(typeof num1);



console.log((Number.parseInt(num1))+1);
console.log(Number.parseInt(num2));
console.log(Number.parseFloat(num2));

console.log(Number.parseInt(num3)); //NaN


//Enetero o no
console.log(Number.isInteger(num4));
console.log(Number.isInteger(num3));
console.log(Number.isInteger(num1));

//Convertir a string
let num5 = num4 + '';
console.log(`${num5} -- ${num5.length}`);
console.log(typeof(num5));


let num6 = `${num4}`;
console.log(typeof(num6));


let num7 = String(num4);
console.log(typeof(num7));

