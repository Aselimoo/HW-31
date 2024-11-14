// Домашнее задание к уроку №31: “Условное ветвление в JavaScript”

// Задание 1: Простое условие

let num = Number(prompt("Введите число: "));

if (num > 10) {
    console.log("Число больше 10");
} else {
    console.log("Число меньше или равно 10");
};


// Задание 2: Подтверждение действия

let userConfirmed = confirm("Вы уверены, что хотите удалить файл?"); 

if (userConfirmed) {
    console.log("Файл удален");
} else {
    console.log("Удаление отменено");
};


// Задание 3: Несколько условий с else if

let age = Number(prompt("Введите ваш возраст: "));

if (age < 18) {
    console.log("Вы еще подросток");
} else if (18 <= age && age <= 30) {
    console.log("Вы молодой взрослый");
} else {
    console.log("Вы взрослый");
}


// Задание 4: Тернарный оператор

let num2 = Number(prompt("Введите число: "));

let isEven = (num2 % 2 === 0) ? "Четное число" : "Нечетное число";
console.log(isEven);


// Задание 5: Условное ветвление switch-case

let dayOfWeek = Number(prompt("Введите день недели: "));
let message;

switch (dayOfWeek) {
    case 1:
        message = "Понедельник";
        break;
    case 2:
        message = "Вторник";
        break;
    case 3:
        message = "Среда";
        break;
    case 4:
        message = "Четверг";
        break;
    case 5:
        message = "Пятница";
        break;
    case 6:
        message = "Суббота";
        break;
    case 7:
        message = "Воскресенье";
        break;
    default:
        message = "Некорректное значение";
};

console.log(message);


// Задание 6: Комбинация if-else и тернарного оператора

let numb1 = Number(prompt("Введите первое число: "));
let numb2 = Number(prompt("Введите второе число: "));

let compare = (numb1 > numb2) ? "Первое число больше" : "Второе число больше";

if (numb1 === numb2) {
    console.log("Числа равны");
} else {
    console.log(compare);
}



// Дополнительное задание:

let numOfMonth = Number(prompt("Введите время года: "));
let message1;

switch (numOfMonth) {
    case 12:
    case 1:
    case 2:
        message1 = "Зима";
        break;
    case 3:
    case 4:
    case 5:
        message1 = "Весна";
        break;
    case 6:
    case 7:
    case 8:
        message1 = "Лето";
        break;
    case 9:
    case 10:
    case 11:
        message1 = "Осень";
        break;
    default:
        message1 = "Некорректное значение";
};

console.log(message1);
