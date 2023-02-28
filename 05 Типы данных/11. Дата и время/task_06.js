
// СКОЛЬКО СЕГОДНЯ ПРОШЛО СЕКУНД?

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.



function getSecondsToday() {
    let dateToday = new Date();

    return dateToday.getSeconds() + dateToday.getMinutes() * 60 + dateToday.getHours() * 3600;
}

console.log(getSecondsToday());