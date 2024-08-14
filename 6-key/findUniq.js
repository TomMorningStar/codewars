function findUniq(arr) {
	// do magic
	const mapa = {}

	arr.forEach(el => {
		if (!mapa[el]) {
			mapa[el] = 1
		} else {
			mapa[el]++
		}
	})
	console.log(
		Object.entries(mapa)
			.sort((a, b) => a[1] - b[1])
			.map(el => el[0])[0]
	)

	// return Object.entries(mapa).map()
}

console.log(findUniq([1, 1, 1, 2, 1, 1, 1])) // 2
