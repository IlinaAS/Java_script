/* Сумма нечетных чисел от 1 до N: пользователь вводит N, программа
вычисляет сумму всех нечетных чисел от 1 до N. 
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите число N: ', (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
        if (i > n) {
            break;
        }
    }
    console.log(`Сумма нечетных чисел до ${n}: ${sum}`);
    readline.close(); 
});