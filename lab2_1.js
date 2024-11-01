/* Разделение массива на части. Разделите массив на части по 3 элемента в
каждой, используя метод splice().
*/

let numbers = [1, 2, 3, 4, 5, 6];
let result = [];
while (numbers.length > 0) {
    result.push(numbers.splice(0, 3));
}

console.log('Разделенный массив:', result);

