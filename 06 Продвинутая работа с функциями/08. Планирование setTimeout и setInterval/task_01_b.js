
// ВЫВОД КАЖДУЮ СЕКУНДУ

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// 1. Используя setInterval.
// 2. Используя рекурсивный setTimeout.



console.log('используем рекурсивный setTimeout');

printNumbers(1, 10);

// используем рекурсивный setTimeout
function printNumbers(from, to) {
    let counter = from;

    setTimeout(function func() {

        if (counter <= to) {
            console.log(counter);
            counter++;

            setTimeout(func, 1000);
        }
    }, 1000);
}
