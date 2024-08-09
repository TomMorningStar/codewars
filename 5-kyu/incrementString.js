// function incrementString(string) {
// 	const arr = string.split('')
// 	let idx

// 	const isNumber = val => val == +val

// 	const a = arr.every(x => !isNumber(x))
// 	const b = arr.every(x => isNumber(x))

// 	if (a) return string + 1
// 	// if (b) {
// 	// 	return
// 	// }

// 	for (let i = arr.length - 1; i > 0; i--) {
// 		if (isNumber(arr[i])) {
// 			idx = i
// 		}
// 	}

// 	const lastNumbers = string.substring(idx, string.length)

// 	function convertToNextNumber(number) {
// 		return (number + 1).toString().padStart(lastNumbers.length, '0')
// 	}

// 	const result = convertToNextNumber(+lastNumbers)

// 	return string.substring(0, idx) + result
// }
const incrementString = s => s.replace(/[0-8]?9*$/, m => String(++m))
console.log(incrementString('foobar312000'))

// console.log(incrementString('foobar'))
// console.log(incrementString('foobar000'))
// console.log(incrementString('foobar999'))
