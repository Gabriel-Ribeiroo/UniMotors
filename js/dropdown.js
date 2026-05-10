import { handleKeydown } from "./onKeydown.js"

const dropdownMenu = document.querySelector("[data-js='dropdown-menu']")
const dropdownTrigger = document.querySelector("[data-js='dropdown-trigger']")

function handleClickOutside(event) {
	const clickOutside = !dropdownMenu.contains(event.target) && !dropdownTrigger.contains(event.target)

	if (clickOutside) closeDropdown()
}

function closeDropdownOnEscPress(event) {
	handleKeydown({ event, key: "Escape", onKeydown: closeDropdown })
}

function closeDropdown() {
	dropdownMenu.classList.add("hidden")
	document.removeEventListener("keydown", closeDropdownOnEscPress)
	document.removeEventListener("click", handleClickOutside)
}

function openDropdown() {
	dropdownMenu.classList.remove("hidden")
	document.addEventListener("keydown", closeDropdownOnEscPress)
	document.addEventListener("click", handleClickOutside)
} 

export function toggleDropdown(event) {
	if(dropdownMenu.classList.contains("hidden")) {
		return openDropdown()
	}

	closeDropdown()
}

dropdownTrigger.addEventListener("click", toggleDropdown)