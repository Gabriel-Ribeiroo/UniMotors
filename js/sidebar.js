import { handleKeydown } from "./onKeydown.js"

const sidebar = document.querySelector("[data-js='sidebar']")

export function openSidebar() {
	sidebar.classList.remove("hidden")
	document.addEventListener("keydown", closeSidebarOnEscPress)
}

export function closeSidebar() {
	sidebar.classList.add("hidden")
	document.removeEventListener("keydown", closeSidebarOnEscPress)
}

export function closeSidebarOnEscPress(event) {
	handleKeydown({ event, key: "Escape", onKeydown: closeSidebar })
}

const sidebarOpenButton = document.querySelector("[data-js='sidebar-open']")
sidebarOpenButton.addEventListener("click", openSidebar)

const sidebarCloseButtons = document.querySelectorAll("[data-js='sidebar-close']")
sidebarCloseButtons.forEach(close => close.addEventListener("click", closeSidebar))