const f1 = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 3000)
})
const f2 = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 2000)
})
const f3 = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(3);
  }, 1000)
})

// Запускаем все функции параллельно, но управляем порядком вывода логов
const runFunctionsInOrder = () => {
  const promises = [f1(), f2(), f3()];
  Promise.all(promises).then(results => {
    results.forEach(result => {
      console.log(result);
    });
  });
}

runFunctionsInOrder();
