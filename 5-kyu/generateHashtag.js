// Он должен начинаться с хэштега ( #).
// Первая буква всех слов должна быть заглавной.
// Если конечный результат длиннее 140 символов, он должен вернуть false.
// Если входные данные или результат являются пустой строкой, необходимо вернуть false.

function generateHashtag (str) {

  if(str.trim() === '') {
    return false;
  }

  if(!str) {
    return false;
  }

  const result = '#' + str.split(' ')
  .filter(el => {
    if(el.trim() === '') {
      return false;
    }

    return true
  })
  .map(el => el[0].toUpperCase() + el.substring(1, el.length))
  .join('')

  if(result.length > 140) return false;

  return result;

}

console.log(generateHashtag("Do we    have A Hashtag"));
console.log(!!" ");
