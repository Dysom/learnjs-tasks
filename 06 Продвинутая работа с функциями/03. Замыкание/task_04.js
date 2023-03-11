
// СУММА С ПОМОЩЬЮ ЗАМЫКАНИЙ

// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// Например:

// sum(1)(2) = 3
// sum(5)(-1) = 4



function sum(num) {

    return function (internalNum) {
        return num + internalNum;
    }
}

console.log(sum(1)(2));
console.log(sum(5)(-1));
