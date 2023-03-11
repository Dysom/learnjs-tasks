
// ВЫВОД ОДНОСВЯЗНОГО СПИСКА

// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?



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

console.log('цикл:');

// цикл
let printList = (node) => {
    while (node !== null) {
        console.log('value:', node.value);
        node = node.next;
    }
};

printList(list);

console.log();
console.log('рекурсия:');

// рекурсия
printList = (node) => {
    if (node !== null) {
        console.log('value:', node.value);
        printList(node.next);
    }
};

printList(list);

//  с точки зрения расхода ресурсов использование цикла предпочтительней
