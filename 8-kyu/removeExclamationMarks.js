// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replace(/!/g, '')

  // 2) return s.split('!').join('')

  // 3) return s.split('').filter(x => x !== '!').join('')

  // 4) return s.split('').filter(x => x !== '!').reduce((a, b) => a + b)

  // 5) return s.split('').filter(x => x !== '!').reduce((a, b) => a.concat(b))

  // 6) return s.split('').filter(x => x !== '!').reduce((a, b) => a.concat(b)).join('')
}

console.log(removeExclamationMarks("Hello! World!")); // "Hello World"
