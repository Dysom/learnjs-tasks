
// УСТАНОВКА И УМЕНЬШЕНИЕ ЗНАЧЕНИЯ СЧЁТЧИКА

// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

//// фрагменты кода из песочницы:
// function makeCounter() {
//     let count = 0;

//     // ... ваш код ...
//   }

//   let counter = makeCounter();
// ...

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.


{
    // использование замыкания
    console.log('использование замыкания');

    function makeCounter() {
        let count = 0;

        let func = function () {
            return count++;
        };

        func.set = (value) => {
            count = value;
        };

        func.decrease = () => {
            count--;
        };

        return func;
    }

    let counter = makeCounter();

    console.log(counter()); // 0
    console.log(counter()); // 1

    counter.set(10); // установить новое значение счётчика

    console.log(counter()); // 10

    counter.decrease(); // уменьшить значение счётчика на 1

    console.log(counter()); // 10 (вместо 11)
}

console.log();

{
    // использование свойства функции
    console.log('использование свойства функции');

    function makeCounter() {

        func.count = 0;

        func.set = (value) => {
            func.count = value;
        };

        func.decrease = () => {
            func.count--;
        };

        return func;

        function func() {
            return func.count++;
        }
    }

    let counter = makeCounter();

    console.log(counter()); // 0
    console.log(counter()); // 1

    counter.set(10); // установить новое значение счётчика

    console.log(counter()); // 10

    counter.decrease(); // уменьшить значение счётчика на 1

    console.log(counter()); // 10 (вместо 11)
}