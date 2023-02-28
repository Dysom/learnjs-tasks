
// ПРЕОБРАЗУЙТЕ ОБЪЕКТ В JSON, А ЗАТЕМ ОБРАТНО В ОБЫЧНЫЙ ОБЪЕКТ

// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };



let user = {
    name: "Василий Иванович",
    age: 35
};

let userJsonStr = JSON.stringify(user);

let otherUser = JSON.parse(userJsonStr);

console.log(user.name === otherUser.name);
console.log(user.age === otherUser.age);
console.log(user === otherUser);