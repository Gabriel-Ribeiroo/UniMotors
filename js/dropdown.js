const dropdownMenu = document.querySelector("[data-js='dropdown-menu']")
const dropdownTrigger = document.querySelector("[data-js='dropdown-trigger']")

function handleClickOutside(event) {
	const clickOutside = !dropdownMenu.contains(event.target) && !dropdownTrigger.contains(event.target)

	if (clickOutside) closeDropdown()
}

function closeDropdown() {
	dropdownMenu.classList.add("hidden")
	document.removeEventListener("click", handleClickOutside)
}

function openDropdown() {
	dropdownMenu.classList.remove("hidden")
	document.addEventListener("click", handleClickOutside)
} 

export function toggleDropdown(event) {
	if(dropdownMenu.classList.contains("hidden")) {
		return openDropdown()
	}

	closeDropdown()
}