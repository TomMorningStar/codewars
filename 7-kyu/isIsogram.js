
// Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Игнорировать регистр букв.

// Пример: (Ввод --> Вывод)

// "Дерматоглифика" --> истина "аба" --> ложь "moOse" --> ложь (игнорировать регистр букв)

// Первый вариант
// function isIsogram(str) {
//   //...
//   const arr = str.toLowerCase().split('');
//   const unique = [...new Set(arr)];

//   return unique.length === arr.length;
// }

// Второй вариант
function isIsogram(str) {
  //...
  return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('aba')); // false
console.log(isIsogram('moOse')); // false // -- ignore letter case
console.log(isIsogram('isIsogram')); // false
console.log(isIsogram('')); // true // -- an empty string is a valid isogram

