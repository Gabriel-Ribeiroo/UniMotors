export function accordionOpenClose(content, openIcon, closeIcon) {
	if(content.classList.contains("hidden")) {
		openIcon.classList.add("hidden")
		closeIcon.classList.remove("hidden")

		content.classList.remove("hidden")			
		content.style.height = "0px"

		return requestAnimationFrame(() => {
			content.style.height = content.scrollHeight + "px"
		})
	}

	content.style.height = "0px"
		
	closeIcon.classList.add("hidden")
	openIcon.classList.remove("hidden")

	content.addEventListener("transitionend", () => {
		if(content.style.height === "0px") content.classList.add("hidden")
	}, { once: true })
}

const accordions = document.querySelectorAll("[data-js='accordion']")

accordions.forEach(accordion => {
	const toggler = accordion.querySelector("[data-js='accordion-toggler']")
	const content = accordion.querySelector("[data-js='accordion-content']")

	const openIcon = accordion.querySelector("[data-js='open-accordion-icon']")
	const closeIcon = accordion.querySelector("[data-js='close-accordion-icon']")

	toggler.addEventListener("click", () => accordionOpenClose(content, openIcon, closeIcon))
})
