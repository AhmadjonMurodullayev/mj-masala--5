// 1. Ixtiyoriy arrow function yarating va unga beriladigan argument promt yordamida kiritilgan son bo'lsin. Kiritilgan sonning raqamlari yig'indisi topilsin

// let number = +prompt("son kiriting");
// let sum = number.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);
// console.log(sum);

// 2. Ixtiyoriy arrow function yarating va uning parametriga bi nechta sonlar berilsin. va o'sha sonlar yig'indisini arrayning element lari ko'rinishida ifodalang: masalan: [1, 22, 3] yigindisi: 26 result=> [2,6]

// let nums = [1, 22,3]

// let sum = nums.reduce(function (currentSum, currentNumber) {
//   return currentSum + currentNumber
// }, 0).toString().split("")
// console.log(sum);

// 3.Promt yordamida ixtiyoriy son kiritilsin va o'sha sonning lvadradi palindrome yoki palindrome emasligi topilsin algorithm function ichida bo'lsin
// let number = +prompt("son kiriting")
//   function isPolindrop(n){
//     console.log(n);
//     n = Math.pow(n, 2)
//     console.log(n);
//     let num = +n.toString().split("").reverse().join("");
//     return num === n ? "polindirome" : "polindirome emas"
//   }
// console.log(isPolindrop(number));

// 4.Ixtiyoriy 2 ta funciton yaratilsin 1-function ichida random sonning raqamlari yig'indisi topilsin va mana shu 1-function 2-funciton ni ichida ishlasin masala callback function yordamida bajarilsin
function numberFort(){
let number = Math.floor(Math.random()*100)
console.log(number);
let sum = number.toString().split("").reduce((a,b) => a + b,0)
console.log(sum) 
let total = sum.from("numer", Number)
console.log(total);
return sum
}

numberFort()
// console.log(numberFort(n));
// const random = () =>{
//     
//     return number
// }
// const random2 = (num) => {
//     let numb = 10
//     console.log(num);
//     let res = numb + num
//     return res
// }
// console.log(random2(random()));

// 5.Promt va funciton yarating promt ichida yozilgan so'zning palindome yoki palindrome emasligi topilsin
// let number = prompt("so'z kiriting")
//   function isPolindrop(n){
//     console.log(n);
//     let num = n.split("").reverse().join("");
//     return num === n ? "polindirome" : "polindirome emas"
//   }
// console.log(isPolindrop(number));

// 6. Ixtiyoriy object yarating => {a:1,b:22} value larinig yig'indisini toping => 23 value larining yigindising yig'indisini toping => 2 + 3 = 5
// let objs = {
//   a: 1,
//   b: 22,
// };
// let values = Object.values(objs).reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);
// let res = Array.from(values.toString().split(""), Number).reduce(function (
//   a,
//   b
// ) {
//   return a + b;
// },
// 0);
// console.log(values);
// console.log(res);


// let arr = Array.from("123", Number)



// console.log(arr.reduce((a, b) => a + b, 0));
