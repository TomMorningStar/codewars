// не решено

Array.prototype.snail = function (rowsCount, colsCount) {
	// if (rowsCount * colsCount > this.length) return []
	// const arr = [...this]
	// const result = []
	// while (colsCount > 0) {
	// 	result.push(arr.splice(0, rowsCount))
	// 	colsCount -= 1
	// }
	// return result
}

const arr = [
	19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
]

console.log(arr.snail(5, 4))
