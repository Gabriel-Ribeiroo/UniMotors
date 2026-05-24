import { handleKeydown } from "./onKeydown.js"

function getContent(trigger) {
	const selector = trigger.dataset.target
	const content = document.querySelector(selector)

	return content
}

function getControllers(element) {
	if(!element.id) return []
	return document.querySelectorAll(`[aria-controls="${element.id}"]`)
}

function setExpanded(element, expanded) {
	getControllers(element).forEach(controller => {
		controller.setAttribute("aria-expanded", String(expanded))
	})
}

function focusInto(element) {
	const autofocus = element.querySelector("[data-autofocus]")

	if(autofocus) {
		autofocus.focus()
		return
	}

	const focusable = element.querySelector("button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex='-1'])")
	if(focusable) focusable.focus()
}

function openElement(element, handlers, openedBy) {
	element.classList.remove("hidden")
	setExpanded(element, true)

	if(openedBy && openedBy.hasAttribute("aria-controls")) {
		element._openedBy = openedBy
		focusInto(element)
	}

	document.addEventListener("click", handlers.clickOutside)
	document.addEventListener("keydown", handlers.onEscPress)
}

function closeElement(element, handlers) {
	element.classList.add("hidden")
	setExpanded(element, false)

	if(element._openedBy) {
		element._openedBy.focus()
		element._openedBy = null
	}

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
		openElement(element, handlers, target)
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

		setExpanded(element, true)
		document.addEventListener("click", handlers.clickOutside)
		document.addEventListener("keydown", handlers.onEscPress)
	}
})
