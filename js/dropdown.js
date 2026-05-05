const dropdownMenu = document.querySelector("[data-js='dropdown-menu']")

export function toggleDropdown() {
    if(dropdownMenu.classList.contains("hidden")) {
        return dropdownMenu.classList.remove("hidden")
    }

    dropdownMenu.classList.add("hidden")
}