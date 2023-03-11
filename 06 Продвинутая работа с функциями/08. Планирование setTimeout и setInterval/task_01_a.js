
// ВЫВОД КАЖДУЮ СЕКУНДУ

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// 1. Используя setInterval.
// 2. Используя рекурсивный setTimeout.



console.log('используем setInterval');

printNumbers(1, 10);

// используем setInterval
function printNumbers(from, to) {
    let counter = from;

    let timerId = setInterval(() => {

        if (counter > to) {
            clearInterval(timerId);
        }
        else {
            console.log(counter);
            counter++;
        }
    }, 1000);
}
