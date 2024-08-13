// Дан массив arr = [1,8,3,9,12,13,2,5,6], необходимо отсортировать четные числа по возрастанию и оставить их на месте

const sortEvents = array => {
	const events = []

	array.forEach(el => el % 2 === 0 && events.push(el))
	events.sort((a, b) => a - b)

	return array.map(el => (el % 2 === 0 ? events.shift() : el))
}

console.log(sortEvents([1, 8, 3, 9, 12, 13, 2, 5, 6]))
