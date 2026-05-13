import { handleKeydown } from "./onKeydown.js"

function getContent(trigger) {
	const selector = trigger.dataset.target 
	const content = document.querySelector(selector) 

	return content
}

function openElement(element, handlers) {
	element.classList.remove("hidden")
	document.addEventListener("click", handlers.clickOutside)
	document.addEventListener("keydown", handlers.onEscPress)
}

function closeElement(element, handlers) {
	element.classList.add("hidden") 
	document.removeEventListener("click", handlers.clickOutside)
	document.removeEventListener("keydown", handlers.onEscPress)
}

function buildHandlers(element, target) {
	const handlers = {}
	
	handlers.clickOutside = event => {
		const clickOutside = !element.contains(event.target) && !target.contains(event.target)
		if(clickOutside) closeElement(element, handlers)
	}

	handlers.onEscPress = event => {
		handleKeydown({ event, key: "escape", onKeydown: () => closeElement(element, handlers) })
	}

	return handlers
}

export function toggleElementVisibility(event) {
	const target = event.currentTarget
	const element = getContent(target)
	const handlers = buildHandlers(element, target)

	if(element.classList.contains("hidden")) {
		openElement(element, handlers)
		return 
	}

	closeElement(element, handlers)
}

const triggers = document.querySelectorAll("[data-js='open-close-trigger']") 

triggers.forEach(trigger => {
	trigger.addEventListener("click", toggleElementVisibility)

	const element = getContent(trigger)

	if(element && !element.classList.contains("hidden")) {
		const handlers = buildHandlers(element, trigger)

		document.addEventListener("click", handlers.clickOutside)
		document.addEventListener("keydown", handlers.onEscPress)
	}

})