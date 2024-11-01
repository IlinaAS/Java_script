/* Посчитать среднее арифметическое чисел от 1 до N: вычислить среднее
арифметическое для введенного числа N.
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите число N: ', (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) { 
        sum += i;
    }

    let average = sum / n; 
    console.log(`Среднее арифметическое чисел от 1 до ${n}: ${average}`); 
    readline.close(); 
});