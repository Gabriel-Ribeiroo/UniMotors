export function closeElement(event) {
    const elementToClose = event.target.closest("[data-js='content-to-close']")
    elementToClose.classList.add("hidden")
}

const closeElements = document.querySelectorAll("[data-js='close-element']") 

closeElements.forEach(ce => ce.addEventListener("click", closeElement))

