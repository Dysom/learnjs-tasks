
// МАКСИМАЛЬНАЯ ЗАРПЛАТА

// У нас есть объект salaries с зарплатами:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.



let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));

function topSalary(salaries) {

    let [nameOfEmployeeWithMaxSalary] = Object.entries(salaries).reduce((employeeWithMaxSalary, [name, salary]) => {
        if (employeeWithMaxSalary[0] === null) {
            return [name, salary];
        }

        if (employeeWithMaxSalary[1] < salary) {
            return [name, salary];
        }

        return employeeWithMaxSalary;
    }, [null]);

    return nameOfEmployeeWithMaxSalary;
}
