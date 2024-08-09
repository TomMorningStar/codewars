function merge(nums1, m, nums2, n) {
	const result = []

	function w(count, arr) {
		let i = 0
		console.log(count)
		while (i < count) {
			result.push(arr[i])
			i++
		}
	}

	w(m, nums1)
	w(n, nums2)

	return result.sort()
}

// console.log(merge([1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3));
//Output: [1,2,2,3,5,6]

// class Foo {
// 	constructor() {
// 		this.id = 'foo'
// 		this.print()
// 	}

// 	print() {
// 		console.log('foo' + this.id)
// 	}
// }

// class Bar extends Foo {
// 	constructor() {
// 		super()

// 		this.id = 'BAR'
// 		this.print()
// 		super.print()
// 	}

// 	print() {
// 		console.log('BAR-' + this.id)
// 	}
// }

// new Bar()

// // const obj = {
// // 	a: 1,
// // 	b: 2,
// // 	c: 3,
// // }

// // const { a, c } = obj

// // console.log(a, c)

// // const inc = () => {
// // 	let counter = 0
// // 	return () => (counter += 1)
// // }

// // const inc1 = inc()

// // console.log(inc1(), inc1(), inc1())

// // for (let arr = []; arr.length < 3; arr.push(1)) {
// // 	const newArr = [...arr]
// // 	setTimeout(() => {
// // 		console.log(newArr)
// // 	}, 0)
// // }
