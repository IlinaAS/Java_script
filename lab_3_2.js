// Напишите функцию, которая возводит число в степень  

function power(base, exponent) {
    if (exponent === 0) return 1; // любое число в степени 0 равно 1
    let result = 1;
    const isNegativeExponent = exponent < 0;
    exponent = Math.abs(exponent);

    for (let i = 0; i < exponent; i++) {
        result *= base;
    }

    return isNegativeExponent ? 1 / result : result;
}

// Примеры использования:
console.log(power(2, 3)); // 8
console.log(power(5, 2)); // 25
console.log(power(3, 0)); // 1
console.log(power(2, -2)); // 0.25