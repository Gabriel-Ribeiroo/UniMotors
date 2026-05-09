import { toggleTheme } from "./theme.js"
import { openSidebar, closeSidebar, closeSidebarOnEscPress } from "./sidebar.js"
import { accordionOpenClose } from "./accordion.js"
import { incrementCartProductsQuantity } from "./cartCount.js"
import { toggleDropdown } from "./dropdown.js"
import { nextSlide, prevSlide, goToSlide, startCarouselAutoPlay } from "./carousel.js"

const themeToggler = document.querySelector("[data-js='theme-toggler']")
themeToggler.addEventListener("click", toggleTheme)

// SIDEBAR 
const sidebarOpenButton = document.querySelector("[data-js='sidebar-open']")
sidebarOpenButton.addEventListener("click", openSidebar)

const sidebarCloseButtons = document.querySelectorAll("[data-js='sidebar-close']")
sidebarCloseButtons.forEach(close => close.addEventListener("click", closeSidebar))

document.addEventListener("keydown", closeSidebarOnEscPress)

// ACCORDION
const accordions = document.querySelectorAll("[data-js='accordion']")

accordions.forEach(accordion => {
	const toggler = accordion.querySelector("[data-js='accordion-toggler']")
	const content = accordion.querySelector("[data-js='accordion-content']")

	const openIcon = accordion.querySelector("[data-js='open-accordion-icon']")
	const closeIcon = accordion.querySelector("[data-js='close-accordion-icon']")

	toggler.addEventListener("click", () => accordionOpenClose(content, openIcon, closeIcon))
})

// CART
const addToCartButtons = document.querySelectorAll("[data-js='add-to-cart']")

addToCartButtons.forEach(button => {
	button.addEventListener("click", () => incrementCartProductsQuantity(button))
})

// DROPDOWN
const dropdownTrigger = document.querySelector("[data-js='dropdown-trigger']")
dropdownTrigger.addEventListener("click", toggleDropdown)

// CAROUSEL
const carouselPrev = document.querySelector("[data-js='carousel-prev']")
const carouselNext = document.querySelector("[data-js='carousel-next']")
const carouselIndicators = document.querySelectorAll("[data-js='carousel-indicator']")

carouselPrev.addEventListener("click", prevSlide)
carouselNext.addEventListener("click", nextSlide)

carouselIndicators.forEach((indicator, index) => {
	indicator.addEventListener("click", () => goToSlide(index))
})

startCarouselAutoPlay()