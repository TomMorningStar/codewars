
// Суммирование
// Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом больше 0.

// Например (Вход -> Выход) :

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// Решение:
var summation = function (num) {
  return new Array(num).fill().map((e, i) => i + 1).reduce((acc, num) => acc + num, 0)
}

console.log(summation(1)) // 1
console.log(summation(8)) // 36

