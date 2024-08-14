// Дан массив слов ['гора', "раки", "каир", "рога", "ирак", "игра"]
// необходимо найти все слова анаграммы и вернуть массив анаграмм по возрастанию от количества повторений

const getAnagrams = arr => {
	const mapa = {}

	arr.forEach(el => {
		const sorted = el.split('').sort().join('')

		if (mapa[sorted]) {
			mapa[sorted]++
		} else {
			mapa[sorted] = 1
		}
	})

	return Object.entries(mapa)
		.sort((a, b) => a[1] - b[1])
		.map(item => item[0])
}

console.log(getAnagrams(['гора', 'раки', 'каир', 'рога', 'ирак', 'игра']))
