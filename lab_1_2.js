/* Вывести "елочку" из символов: пользователь вводит высоту елочки,
программа рисует елочку из символов *.
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
   });
   
readline.question('Введите высоту елочки: ', (height) => { 
    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
});