import { showCartToast } from "./showCartToast.js"

const cart = new Map()

const badge = document.querySelector("[data-js='cart-badge']")
const list = document.querySelector("[data-js='cart-list']")
const empty = document.querySelector("[data-js='cart-empty']")
const totalEl = document.querySelector("[data-js='cart-total']")
const checkout = document.querySelector("[data-js='cart-checkout']")

function parsePrice(text) {
	return Number(text.replace(/[^\d,]/g, "").replace(/\./g, "").replace(",", "."))
}

function formatPrice(value) {
	return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

function readProduct(source) {
	const name = source.querySelector("h3").textContent.trim()
	const priceEl = source.querySelector(".month__new-value") || source.querySelector("p")
	const price = parsePrice(priceEl.textContent)
	const img = source.querySelector("img")

	return { id: name, name, price, image: img ? img.getAttribute("src") : "" }
}

function bumpBadge() {
	badge.classList.remove("bump")
	requestAnimationFrame(() => badge.classList.add("bump"))
}

function totalItems() {
	let n = 0

	for (const item of cart.values()) {
		n += item.qty
	}

	return n
}

function totalPrice() {
	let total = 0

	for (const item of cart.values()) {
		total += item.price * item.qty
	}

	return total
}

function createElement(tag, { className, text, attrs } = {}) {
	const node = document.createElement(tag)
	if (className) node.className = className

	if (text !== undefined) node.textContent = text

	if (attrs) {
		for (const [key, value] of Object.entries(attrs)) {
			node.setAttribute(key, value)
		}
	}
	
	return node
}

function buildQtyControls(item) {
	const wrapper = createElement("div", { className: "cart-item__qty" })

	const decrement = createElement("button", {
		text: "−",
		attrs: { type: "button", "aria-label": "Diminuir quantidade", "data-js": "qty-decrement" },
	})

	const value = createElement("span", {
		text: String(item.qty),
		attrs: { "data-js": "qty-value" },
	})

	const increment = createElement("button", {
		text: "+",
		attrs: { type: "button", "aria-label": "Aumentar quantidade", "data-js": "qty-increment" },
	})

	wrapper.append(decrement, value, increment)
	return wrapper
}

function buildItemNode(item) {
	const li = createElement("li", { className: "cart-item" })
	li.dataset.id = item.id

	const image = createElement("img", {
		className: "cart-item__image",
		attrs: { src: item.image, alt: "", "aria-hidden": "true" },
	})

	const info = createElement("div", { className: "cart-item__info" })
	const name = createElement("h3", { className: "cart-item__name", text: item.name })
	const price = createElement("p", { className: "cart-item__price", text: formatPrice(item.price) })
	info.append(name, price, buildQtyControls(item))

	const remove = createElement("button", {
		className: "cart-item__remove",
		attrs: {
			type: "button",
			"aria-label": `Remover ${item.name}`,
			"data-js": "cart-remove",
		},
	})

	li.append(image, info, remove)
	return li
}

function renderBadge() {
	const count = totalItems()

	if (count <= 0) {
		badge.classList.add("hidden")
		badge.textContent = "0"
		return
	}

	badge.textContent = String(count)
	badge.classList.remove("hidden")
}

function renderCart() {
	list.replaceChildren()

	if (cart.size === 0) {
		empty.classList.remove("hidden")
		list.classList.add("hidden")
		checkout.disabled = true
	} else {
		empty.classList.add("hidden")
		list.classList.remove("hidden")
		checkout.disabled = false

		for (const item of cart.values()) {
			list.appendChild(buildItemNode(item))
		}
	}

	totalEl.textContent = formatPrice(totalPrice())
	renderBadge()
}

function addToCart(button) {
	const source = button.closest("[data-js='product-item']") || button.closest(".month__card")
	if (!source) return

	const product = readProduct(source)
	const existing = cart.get(product.id)

	if (existing) existing.qty += 1
	else cart.set(product.id, { ...product, qty: 1 })

	renderCart()
	bumpBadge()
	showCartToast(`"${product.name}" adicionado ao carrinho`)
}

function changeQty(id, delta) {
	const item = cart.get(id)
	if (!item) return

	item.qty += delta
	if (item.qty <= 0) cart.delete(id)

	renderCart()
}

function removeItem(id) {
	cart.delete(id)
	renderCart()
}

list.addEventListener("click", event => {
	const action = event.target.closest("[data-js]")
	if (!action || !list.contains(action)) return

	const li = action.closest(".cart-item")
	if (!li) return

	const id = li.dataset.id
	const kind = action.dataset.js

	if (kind === "qty-increment") changeQty(id, +1)
	else if (kind === "qty-decrement") changeQty(id, -1)
	else if (kind === "cart-remove") removeItem(id)
})

document.querySelectorAll("[data-js='add-to-cart']").
forEach(button => {
	button.addEventListener("click", () => addToCart(button))
})

renderCart()