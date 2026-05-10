const sidebar = document.querySelector("[data-js='sidebar']")

export function openSidebar() {
	sidebar.classList.remove("hidden")
}

export function closeSidebar() {
	sidebar.classList.add("hidden")
}

export function closeSidebarOnEscPress(event) {
	if (event.key.toLowerCase() !== "escape") return 

	if (!sidebar.classList.contains("hidden")) {
		closeSidebar()
	}
}

const sidebarOpenButton = document.querySelector("[data-js='sidebar-open']")
sidebarOpenButton.addEventListener("click", openSidebar)

const sidebarCloseButtons = document.querySelectorAll("[data-js='sidebar-close']")
sidebarCloseButtons.forEach(close => close.addEventListener("click", closeSidebar))

document.addEventListener("keydown", closeSidebarOnEscPress)