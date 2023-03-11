
// ВЫВОД ОДНОСВЯЗНОГО СПИСКА В ОБРАТНОМ ПОРЯДКЕ

// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.



let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

console.log('цикл');

// цикл
let printReverseList = (node) => {
    let reverse = { link: node, next: null };

    while (node !== null) {
        reverse = { link: node.next, next: reverse };
        node = node.next;
    }

    while (reverse) {
        if (reverse.link)
            console.log('value', reverse.link.value);
        reverse = reverse.next;
    }
};

printReverseList(list);

console.log();
console.log('рекурсия:');

// рекурсия
printList = (node) => {
    if (node !== null) {
        printList(node.next);
        console.log('value:', node.value);
    }
};

printList(list);

