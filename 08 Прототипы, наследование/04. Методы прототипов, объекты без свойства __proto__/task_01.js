
// ДОБАВЬТЕ TOSTRING В СЛОВАРЬ

// Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.

// Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.

// Вот так это должно работать:

// let dictionary = Object.create(null);

// // ваш код, который добавляет метод dictionary.toString

// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // только apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//   alert(key); // "apple", затем "__proto__"
// }

// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"



"use strict";

let dictionary = Object.create(null);

Object.defineProperty(dictionary, "toString", {
    value: function () {

        return Object.keys(this).join(',');
    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

for (let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
}

console.log('-'.repeat(15));

console.log(dictionary.toString()); // "apple,__proto__"
