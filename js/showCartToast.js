let toastTimeout

document.fonts.ready.then(() => {})

export function showCartToast(message) {
	const existing = document.querySelector(".cart-toast")
	if (existing) existing.remove()
	clearTimeout(toastTimeout)

	const toast = document.createElement("div")
	toast.className = "cart-toast hidden"
	toast.setAttribute("role", "status")
	toast.setAttribute("aria-live", "polite")
	toast.textContent = message
	document.body.appendChild(toast)

	requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.remove("hidden")))

	toastTimeout = setTimeout(() => {
		toast.classList.add("hidden")
		setTimeout(() => toast.remove(), 300)
	}, 2500)
}