//Виводимо кнопку з текстом "Змінити" і два інпути, при натисканні на кнопку інпути
//змінюються своїм введеним текстом
{
  /* <input type="text" id="js-input1" value="!!!!!!!!!!!!">
<input type="text" id="js-input2" value="????????????">
<button type="button" class="btn">Змінити</button> */
}

// const btnEl = document.querySelector('.btn');
// const inputEl = document.querySelectorAll('input');

// const onBtnClick = evt => {
//   // const firstValue = inputEl[0].value;
//   // const secondValue = inputEl[1].value;
//   // inputEl[0].value = secondValue;
//   // inputEl[1].value = firstValue;
//   [inputEl[0].value, inputEl[1].value] = [inputEl[1].value, inputEl[0].value];
// };

// btnEl.addEventListener('click', onBtnClick);

// 3

//При натисканні на кнопку міняти фоновий колір елемента з класом .play на прозорий.
//Примітка: використовуйте CSS-властивість opacity.

{
  /* <button class="add-btn">add</button>
    <div class="play"></div> */
}
{
  /* <style>
  .play {
    background: pink;
  }
</style> */
}

// const btnEl = document.querySelector('.add-btn');
// const palyEl = document.querySelector('.play');

// btnEl.addEventListener('click', onBtnClick);

// let opacityValue = 1;

// function onBtnClick() {
//   opacityValue -= 0.1;
//   palyEl.style.opacity = opacityValue;
// }

// 4

// Напишіть інтерфейс створення списку.
//Для кожного пункту:

// Запитуйте вміст пункту користувача за допомогою prompt.
// Створюйте елемент <li> і додайте його до <ul>.
// Процес переривається, коли користувач натискає вводить порожній рядок.
// Усі елементи мають створюватися динамічно.

{
  /* <ul class="list"></ul> */
}

// const ulEl = document.querySelector('.list');

// function addToList() {
//   const answer = prompt('Введите новый текст');
//   if (answer) {
//     const itemListRef = document.createElement('li');
//     itemListRef.textContent = answer;
//     ulEl.append(itemListRef);
//     addToList();
//   }
// }
// addToList();

// 5

/* ---------------------------------*/
//Вивести 4 червоні квадрати,
//при кліку на будь - який, він ставати зеленим, при цьому якщо
//є вже зелений квадрат, то він ставати назад червоним і так можна кликати на будь-який
//квадрат, він ставати зеленим, а старий зелений квадрат назад червоним і тд.
//(Зробити завдання так, щоб можна було додати ще хоч 100 квадратів, при цьому скрипт не
//треба міняти).

{
  /* 
  
  .square {
  width: 150px;
  height: 150px;
  background: red;
  margin: 10px;
}

.square.green {
  background: green;
}
  <div class="square"></div> 
<div class="square"></div> 
<div class="square"></div> 
<div class="square"></div>  */
}

// const squaresEl = document.querySelectorAll('.square');

// squaresEl.forEach(square => {
//   square.addEventListener('click', btnClick);
// });

// function btnClick(event) {
//   event.target.classList.toggle('green');
// }
// 6
/*

Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.

  <div>
        <input id="passwordInput" type="text">
        <button id="passwordButton">Приховати</button>
    </div>

*/
// const btnEl = document.querySelector('#passwordButton');
// const inputEl = document.querySelector('#passwordInput');

// btnEl.addEventListener('click', onClick);

// function onClick(even) {
//   btnEl.textContent =
//     btnEl.textContent === 'Приховати' ? 'Розкрити' : 'Приховати';
//   inputEl.type = inputEl.type === 'text' ? 'password' : 'text';
// }
// 8
/*

Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази


    <div>
        <ul class="list">
            <li class="listItem">1</li>
            <li class="listItem">4</li>
            <li class="listItem">8</li>
            <li class="listItem">16</li>
            <li class="listItem">20</li>
            <li class="listItem">30</li>
        </ul>
        <button id="double">Удвоить</button>
    </div>

*/

// btnEl.addEventListener('click', onClick);

// const listEl = document.querySelector('.list');

// const btnEl = document.querySelector('#double');

// const onClick = evt => {
//   const listItems = listEl.children;

//   // [...listItems].forEach((item) => {
//   //   item.textContent = item.textContent * 2;
//   // });

//   listEl.children.__proto__.forEach = [].forEach;
//   listItems.forEach(item => {
//     item.textContent = item.textContent * 2;
//   });
// };

// btnEl.addEventListener('click', onClick);
// 9
// Коло має зникати при наведенні на нього.
// При цьому позиція сусідніх кіл має залишатися незмінною.

//    <ul class="grid">
//         <li class="gridItem">1</li>
//         <li class="gridItem">2</li>
//         <li class="gridItem">3</li>
//         <li class="gridItem">4</li>
//         <li class="gridItem">5</li>
//         <li class="gridItem">6</li>
//         <li class="gridItem">7</li>
//         <li class="gridItem">8</li>
//         <li class="gridItem">9</li>
//     </ul>
const listRef = document.querySelector('.grid');

function toHideElement(event) {
  if (event.target.tagName !== 'LI') {
    return;
  }
  event.target.style.opacity = '0';
}

function toShowElement(event) {
  if (event.target.tagName !== 'LI') {
    return;
  }
  event.target.style.opacity = '1';
}

listRef.addEventListener('mouseover', toHideElement);
listRef.addEventListener('mouseout', toShowElement);
