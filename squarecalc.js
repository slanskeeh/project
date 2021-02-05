"use strict";

let a = prompt('Введите значение аргумента a', ''),
    b = prompt('Введите значение аргумента b', ''),
    c = prompt('Введите значение аргумента c', ''),
    D = null,
    x1 = null,
    x2 = null;

if (a != 0 && b != 0 && c != 0) {
    D = b**2 - 4*a*c;
}

if (D > 0) {
    x1 = (-b - D**0.5)/(2*a);
    x2 = (-b + D**0.5)/(2*a);
    console.log(x1);
    console.log(x2);
} else if (D == 0) {
    x1 = (-b)/(2*a);
    console.log(x1);
} else if (D < 0) {
    console.log('Корней нет');
}
