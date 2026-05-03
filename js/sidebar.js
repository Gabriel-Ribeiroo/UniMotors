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
		sidebar.classList.add("hidden")
	}
}