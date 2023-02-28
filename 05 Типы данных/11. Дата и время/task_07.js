
// СКОЛЬКО СЕКУНД ОСТАЛОСЬ ДО ЗАВТРА?

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.



function getSecondsToTomorrow() {
    const todayDate = new Date();
    const tomorrowDate = new Date(todayDate);

    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    tomorrowDate.setHours(0, 0, 0, 0);

    return Math.round((tomorrowDate - todayDate) / 1000);
}

console.log(getSecondsToTomorrow());
