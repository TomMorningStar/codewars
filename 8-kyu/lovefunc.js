
// Противоположности притягиваются

// Тимми и Сара думают, что они влюблены, но там, где они живут, они узнают об этом только тогда, когда каждый сорвет по цветку. 
// Если у одного из цветов четное количество лепестков, а у другого нечетное количество лепестков, это означает, что они влюблены.

// Напишите функцию, которая будет принимать количество лепестков каждого цветка и возвращать true, если они влюблены, и false, если нет.


// первый вариант

// function lovefunc(flower1, flower2) {
//   // moment of truth
//   if (flower1 % 2 === 0 & flower2 % 2 === 0) {
//     return false
//   }

//   if (flower1 % 2 !== 0 & flower2 % 2 !== 0) {
//     return false
//   }

//   return true
// }

// второй вариант

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2
}

console.log(lovefunc(1, 4)) // true
console.log(lovefunc(2, 2)) // false
console.log(lovefunc(0, 1)) // true
console.log(lovefunc(0, 0)) // false
