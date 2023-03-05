//3. Напишіть цикл, який виведе в консоль усі парні числа від max до min включно по зменшенню

// const max = 50;
// const min = 23;

// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Напишіть програму, яка запитає у користувача "Enter the number of minutes to format"
//число (кількість хвилин) і виведе в консоль
//рядок у форматі годин і хвилин, тобто 70 має повернути у консоль "01:10"
//

// let userTime = Number(prompt('Enter the number of minutes to format'));
// let hour = Math.floor(userTime / 60);
// let minutes = userTime % 60;
// console.log(`${hour}: ${minutes}`.padStart(5, '0'));

//Створіть функцію endsWith(), яка порівнює підрядок str1 із закінченням вихідного рядка
//str і визначає чи закінчується рядок символами підрядка.
// const str = 'Каждый охотник желает знать';
// const str1 = 'скрипт';
// const str2 = 'знать';

// function endsWith(str, substring) {
//   return str.endsWith(substring);
//   // return str.includes(str2);
// }

// console.log(endsWith(str, str1)); // false
// console.log(endsWith(str, str2)); // true

// const shouldRen = confirm('эХотите пролдлить?');
// console.log(shouldRen);

// let quantity = prompt('Введите колво товара');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);
// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// elementWidth =  ;
// console.log(`elementWidth:${result}px`);

// let elementHeight = '20.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight', elementHeight);

// const salary = 1300.16472;
// console.log(salary.toFixed(2));

// let quantity = '30';
// console.log(Number('    1   '));

// console.log(Math.PI);
// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);
// console.log(result);
// console.log(base ** power);

// let number = prompt('Введите число:');
// number = Number(number);
// console.log(number);
// let power = prompt('Введите степень:');
// power = Number(power);
// console.log(power);

// console.log(Math.pow(number, power));

// const max = 99;
// const min = 10;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);
// const message = '1Это строка из много символов.';

// console.log(message.length);
// && - запинается на false или возвращяет последний true
// console.log(5 && 6 && false && 'true' && 0);

// console.log(false || false || 0);
//  || - запинается на true или возвращает последний false

// console.log(!1);
// приводит в boolean и переворачивает
// const stars = 2;
// let price;

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого кол-ва звезд нет');
// }
// console.log(price);

// циклы
// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }
// const minSalary = 500;
// const maxSalary = 5000;

// const employees = 9;

// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );
//   console.log(`P/G работника ${i}-`, salary);
//   totalSalary += salary;
// }

// console.log(totalSalary);

const min = 4;
const max = 13;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    console.log(i);
    total += i;
  }
}
console.log('Обшее', total);
