// // Посчитать общую сумму покупок в корзине

// const cart = [54, 28, 105, 78, 92, 37, 120];

// //2. Сделать переменную total до цикла
// let total = 0;

// // 1. Перебрать массив

// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);

//     // 3. Каждый элемент приплюсовать к total

//     total += cart[i];
// }

// console.log('Total: ', total);

// Задача 2

// Напиши скрипт, который подсчитывает сумму всех четных чисел в массиве

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// // 1. Переменная тотал
// let total = 0;

// 2. Перебрать массив

// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     console.log(number);
    
// // 3. на каждой итерации проверить єлемент на четность
//     if (number % 2 === 0) {
//         console.log("Четное!!");
// // 4. если четный плюсуем к тотал
//         total += number;

//     }
// }

// console.log("Total: ", total);
// Или второй вариант

// for (const number of numbers) {
//     console.log(number);
//     if (number % 2 === 0) {
// console.log("Четное!!");

// total += number;

// }
// }
// console.log("Total: ", total);

// Найти большее число массива

// const numbers = [5, 25, 13, 10, 180, 113, 28, 19];
// let biggestNumber = numbers[0];

// for (const number of numbers) {

//     if (number > biggestNumber) {
//         biggestNumber = number;
//     }
        
// }
// console.log("Biggest number: ", biggestNumber);

// Напиши скрипт, которые объеденияет все элементы массива в одностроковое значение
// Элементов может быть произвольное количество
// Пусть элементы массива будут разделены запятой
// Сначала через for
// Потом через join

// const friends = ['Mango', 'Kiwi', 'Ajax', 'Poly'];
// let string = '';

// for (const friend of friends) {
//     string += friend + ',';
    
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

// или так

// const friends = ['Mango', 'Kiwi', 'Ajax', 'Poly'];
// const string = friends.join(',');
// console.log(string);

// Напиши скрипт, который заменяет регистр каждого символа в строке на противополодный
// Например, если строка JavaScript, то на выходе должно получится jAVAsCRIPT

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// for (const letter of letters) {
// //     if (letter === letter.toLowerCase()) {
// //         invertedString += letter.toUpperCase();
// //     } else {
// //         invertedString += letter.toLowerCase();
// //     }
// // / Второй вариант
//     invertedString +=
//         letter === letter.toLowerCase()
//             ? letter.toUpperCase()
//             : letter.toLowerCase();
// }

// // /


//  console.log('Inverted string: ', invertedString)

// Делаем slug  в URL из названия статьи (например на dev.to)
// Заголовок статьи состоит только из букв и пробелов
//  - нормализируем строку
//  - разбиваем по словам
//  - сшиваем в строку с разделителями
// Должно получиться top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';

// // const normalizedTitle = title.toLowerCase();
// // console.log(normalizedTitle);

// // const words = normalizedTitle.split(' ');
// // console.log(words);

// // const slug = words.join('-');
// // console.log(slug);
 
// // Второй вариант

// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);

// Напиши скрипт, который считат сумму элементов двух массивов

// const array1 = [10, 20, 8, 15, 17];
// const array2 = [15, 3, 5];
// let total = 0;

// const numbers = array1.concat(array2);
// for (const number of numbers) {
//     total += number;
// }

// console.log(total);

// Работаем с коллекцией карточек в Trello
// - Метод splice()
// - Удалить
// - Добавить
// - Обновить
// const cards = ['Карточка-1б', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];
// //  Удалить (по индексу), метод IndexOf

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
// console.table(cards);

// // ДОбавление (по индексу)

// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);

// // Обновление (по индексу)

// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);

// console.log(index);
// cards.splice(index, 1, 'Обновленная карточка-4');

// console.table(cards);

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// message = message.split(" ");
// // console.log(message);

// const total = message.length * pricePerWord;
// console.log(total);
// return message, total;

//    // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);

// function slugify(title) {
//   // Change code below this line
// title = title.join("-");

// console.log(title);


//   // Change code above this line
// }
// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// const makeArray = firstArray.concat(secondArray);
//     let result;

// if (makeArray.length > maxLength) {
//         result = makeArray.slice(0, maxLength);
// } else {
//     result = makeArray.slice();
//     }
    
//     console.log(result);
// return result;
//     // Change code above this line
//   }
//   makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
//   makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
//   makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
//   makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
//   makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

//   function calculateTotal(number) {
//  // Change code below this line
//       let total = 0;
//       for (i = 0; i <= number; i += 1) {
//           total += i;
//       }
// console.log(total);
// return total;
//   // Change code above this line
// }
// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);

// Найти самое длинное слово в строке

// function findLongestWord(string) {
  
//     string = string.split(" ");
//     let longestWord = string[0];
    
    
//     for (let i = 0; i < string.length - 1; i += 1) {
//         if (string[i].length > longestWord.length) {
//             longestWord = string[i];
//         }
//     }
// console.log(longestWord);
//     return longestWord;
    
//     }


// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");

// const logins = ['hjgbhkdkb', 'jduefjwv', 'hjfssf', 'hgffdfff'];
// const loginToFind = 'hjfssf';
// let message = `Пользователь ${loginToFind} не найден`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
    
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
//
// }
// console.log(message);

// Или же 2 вариант

// for (const login of logins) {
//     if (login === loginToFind) {
// //         message = `Пользователь ${loginToFind} найден`;
// //         break;
// //     }
// }
// console.log(message);


//  И 3 вариант

// const message = logins.includes(loginToFind)
// ? `Пользователь ${loginToFind} найден`
// : `Пользователь ${loginToFind} не найден`;

// console.log(message);

// Переделаем в функцию

// const logins = ['hjgbhkdkb', 'jduefjwv', 'hjfssf', 'hgffdfff'];

// // const findLogin = function (allLogins, loginToFind) {

// //     for (const login of allLogins) {
// //         if (login === loginToFind) {
// //             return `Пользователь ${loginToFind} найден`;
// //         }
// //     }
// // return `Пользователь ${loginToFind} не найден`;
// // }

// const findLogin = function (allLogins, loginToFind) {

//     return logins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден`
//         : `Пользователь ${loginToFind} не найден`;
// }

// console.log(findLogin(logins, 'hjgbhkdkb'));
// console.log(findLogin(logins, 'bvbcbb'));
// console.log(findLogin(logins, 'hjfssf'));
// console.log(findLogin(logins, '5365'));

// Дополни код функции createArrayOfNumbers(min, max) так,
//  чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
  
//     for (let i = min; i <= max; i += 1){
        
// numbers.push(i);
//   }
//     console.log(numbers);
  
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

// function filterArray(numbers, value) {
//     let array = [];
//         for (let i = 0; i < numbers.length; i += 1) {
//         if ((value < numbers[i])) {
//             array.push(numbers[i]);
//         }
        
//    }
//   return array;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// Напиши функцию getCommonElements(array1, array2) которая получает два массива
// произвольной длины в параметры array1 и array2, и возвращает новый массив,
//     состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
 
// let array = [];
//     //    Ты берёшь каждый елемент первого масива и спрашиваешь есть ли он во втором?
//     // Если да то пушишь, если нету, ничего не делаешь //
    
//     for (let i = 0; i < array1.length; i += 1) {
        
//           if (array2.includes(array1[i])) {
//               array.push(array1[i]);
//            }
//         }
    
//     console.log(array);
    
// return array;
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// function getEvenNumbers(start, end) {
//    // Change code below this line
// const numbers = [];

//     for (let i = start; i <= end; i += 1) {
        
//         if (i % 2 === 0) {
//             numbers.push(i);
//                  }
//     }
// console.log(numbers);
// return numbers;
//     // Change code above this line
//   }
//   getEvenNumbers(2, 5);
//   getEvenNumbers(3, 11);
//   getEvenNumbers(6, 12);
//   getEvenNumbers(8, 8);
//   getEvenNumbers(7, 7);

// Напиши функцию includes(array, value), которая делает тоже самое,
//     что и метод массива массив.includes(значение) - проверяет,
//     есть ли в массиве array значение value,
//         возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать
// метод массив.includes(значение).

// function includes(array, value) {

//     for (const item of array) {
        
//         if (item === value) {
//             return true;
//          }
//     }
//     return false;
// }

//   // Change code above this line

// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На берегу спокойных вод", "Сон смешного человека"]

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (const key in object) {
//   // console.log(key);
//   if (object.hasOwnProperty(key))
//   console.log(key);
//     propCount +=1;
    
// }
//   // Change code above this line
//     console.log(propCount);
//   return propCount;
// }
// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
// const keys = Object.keys(object);
// console.log(keys);
// // propCount += 1;

//   for (const key of keys) {
//     propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// }
// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
   
//     const array = [];
  
//     for (const product of products) {
//         // console.log(product);
//         const keys = Object.keys(product);
//         // console.log(keys);
//         if (keys.includes(propName)) {
      
//             array.push(product[propName]);
//         }
//     };
//     console.log(array);
//     return array;
// }
// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
  

// let totalPrice = 0;

// for ( const product of products) {
 
//   const values = Object.values(product);
// //   console.log(values);
//     if (values.includes(productName)) {
        
        
//         totalPrice = product.price * product.quantity;
//         console.log(totalPrice);
//   }
// };
//     return totalPrice;
//   // Пиши код выше этой строки
// }
// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");

// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// function calculateMeanTemperature(forecast) {
// //   const todayLow = forecast.today.low;
// //   const todayHigh = forecast.today.high;
// //   const tomorrowLow = forecast.tomorrow.low;
// //   const tomorrowHigh = forecast.tomorrow.high;
//     // const { todayLow, todayHigh, tomorrowLow, tomorrowHigh } = forecast;
//     const {
//   today: {low: todayLow, high: todayHigh},
//   tomorrow: {low: tomorrowLow, high: tomorrowHigh}
// } = forecast
//     console.log(todayLow);

//     ;
//   // Change code above this line
//     console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } });
// calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } });

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//   // Change code above this line
//     console.log({ category, priority, completed, ...data});
//   return {category, priority, completed, ...data};
// }

// makeTask({});
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// makeTask({ category: "Finance", text: "Take interest" });
// makeTask({ priority: "Low", text: "Choose shampoo" });
// makeTask({ text: "Buy bread" });

// function add(...args) {
  
//   let total = 0;

//   
// //   for (const arg of args) {
// //     // console.log(arg);
// // total +=arg;
// // console.log('Total', total);
// //   }
//   return total;
//   // Change code above this line
// }
// add(15, 27);
// add(12, 4, 11, 48);
// // add(32, 6, 13, 19, 8);
// // add(74, 11, 62, 46, 12, 36);


