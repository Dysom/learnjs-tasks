
// ФОРМАТИРОВАНИЕ ОТНОСИТЕЛЬНОЙ ДАТЫ

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );



console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

console.log(formatDate(new Date(new Date - 86400 * 1000)));

function formatDate(agoDate = new Date) {
    let diff = new Date - agoDate;

    if (diff < 1000) {
        return 'прямо сейчас';
    }

    if (diff < 60000) {
        return Math.round(diff / 1000) + ' сек. назад';
    }

    if (diff < 3600000) {
        return Math.round(diff / 60000) + ' мин. назад'
    }

    let dateNum = (agoDate.getDate() + 100).toString().slice(1);
    let monthNum = (agoDate.getMonth() + 101).toString().slice(1);
    let yearNum = agoDate.getFullYear().toString().slice(-2);
    let hoursNum = (agoDate.getHours() + 100).toString().slice(1);
    let minutesNum = (agoDate.getMinutes() + 100).toString().slice(1);

    return [dateNum, monthNum, yearNum].join('.') + ' ' + [hoursNum, minutesNum].join(':');
}