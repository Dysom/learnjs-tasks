
// ПЕРЕВЕДИТЕ ТЕКСТ ВИДА BORDER-LEFT-WIDTH В BORDERLEFTWIDTH

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.



console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');



function camelize(str) {
    let arr = str.split('-');

    arr = arr.map((element, index) => {
        if (index === 0) {
            return element;
        }

        return element[0].toUpperCase() + element.slice(1)
    });

    return arr.join('');
}