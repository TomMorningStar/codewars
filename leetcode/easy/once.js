var once = function (fn) {
	let n = 0
	const cache = new Map()
	return function (...args) {
		if (!n) {
			n++
			const b = fn(...args)

			if (!cache[JSON.stringify(args)]) {
				cache[JSON.stringify(args)] = b
				return b
			} else {
				return cache[JSON.stringify(args)]
			}
		} else {
			return undefined
		}
	}
}

let fn = (a, b, c) => a + b + c
let onceFn = once(fn)

console.log(onceFn(1, 2, 3)) // 6
console.log(onceFn(2, 3, 6)) // returns undefined without calling fn
