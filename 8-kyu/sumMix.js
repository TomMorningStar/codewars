function sumMix(x) {
  return x.reduce((acc, num) => {
    return acc + +num
  }, 0)
}

console.log(sumMix([9, 3, '7', '3'])); // 22
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // 42
