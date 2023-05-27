

// Банкоматы позволяют использовать 4- или 6-значные PIN-коды,
// а PIN-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.

// Если функции передана допустимая строка PIN-кода, верните true, иначе верните false.

// первый вариант

// function validatePIN(pin) {
//   //return true or false
//   if (pin.length === 4 || pin.length === 6) {
//     if (pin.match(/\D/g)) {
//       return false
//     }
//     return true
//   }

// второй вариант
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

console.log(validatePIN("1234")) // true
console.log(validatePIN("12345")) // false
console.log(validatePIN("a234")) // false
console.log(validatePIN("0000")) // true
console.log(validatePIN("1111")) // true
