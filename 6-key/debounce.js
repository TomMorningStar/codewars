const html = document.querySelector('#debounce')
const input = document.querySelector('#input')

const debounce = (callback, wait) => {
	let timeoutId = null
	return (...args) => {
		console.log(args)

		window.clearTimeout(timeoutId)
		timeoutId = window.setTimeout(() => {
			callback(...args)
		}, wait)
	}
}

const handleInput = debounce(event => {
	html.textContent = event.target.value
}, 250)

input.addEventListener('input', e => handleInput(e))
