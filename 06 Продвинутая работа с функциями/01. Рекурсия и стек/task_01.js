
// ВЫЧИСЛИТЬ СУММУ ЧИСЕЛ ДО ДАННОГО

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:

// function sumTo(n) { /*... ваш код ... */ }

// alert( sumTo(100) ); // 5050
// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?



// ОТВЕТ:

// использование цикла
let sumTo = function (num) {
    let sum = 0;

    while (num > 0) {
        sum += num;
        num--;
    }

    return sum;
}

console.log(sumTo(100));



// использование рекурсии
sumTo = function (num) {
    return num === 1 ? num : num + sumTo(num - 1);
}

console.log(sumTo(100));



// с использованием формулы арифметической прогрессии
sumTo = function (num) {
    return num * (num + 1) / 2;
}

console.log(sumTo(100));

// Ответ на P.S.:
// Самый быстрый вариант с использованием арифметической прогрессии, его время исполнения O(1), т.к. функция определяется одной только формулой в 'замкнутом виде',
// два других варианта имеют время исполнения O(N), при этом использование рекурсии несколько медленнее цикла, за счет использования стека вызовов,
// а значит дополнительные расходы на выделение памяти

// Ответ на P.P.S.:
// Как правило лимит на количество вложенных вызовов ниже 100000, следовательно нельзя
