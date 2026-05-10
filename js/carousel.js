const track = document.querySelector("[data-js='carousel-track']")
const indicators = document.querySelectorAll("[data-js='carousel-indicator']")
const slides = Array.from(track.children)

const totalSlides = slides.length
let currentSlide = 0
let autoPlayId

function updateCarousel() {
	track.style.transform = `translateX(-${currentSlide * 100}%)`

	slides.forEach((slide, index) => {
		slide.toggleAttribute("inert", index !== currentSlide)
	})

	indicators.forEach((indicator, index) => {
		indicator.classList.toggle("active", index === currentSlide)
	})
}

updateCarousel()

function resetAutoPlay() {
	clearInterval(autoPlayId)
	startCarouselAutoPlay()
}

export function nextSlide() {
	currentSlide = (currentSlide + 1) % totalSlides
	updateCarousel()
	resetAutoPlay()
}

export function prevSlide() {
	currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
	updateCarousel()
	resetAutoPlay()
}

export function goToSlide(index) {
	currentSlide = index
	updateCarousel()
	resetAutoPlay()
}

export function startCarouselAutoPlay() {
	autoPlayId = setInterval(() => {
		currentSlide = (currentSlide + 1) % totalSlides
		updateCarousel()
	}, 5000)
}

const carouselPrev = document.querySelector("[data-js='carousel-prev']")
const carouselNext = document.querySelector("[data-js='carousel-next']")
const carouselIndicators = document.querySelectorAll("[data-js='carousel-indicator']")

carouselPrev.addEventListener("click", prevSlide)
carouselNext.addEventListener("click", nextSlide)

carouselIndicators.forEach((indicator, index) => {
	indicator.addEventListener("click", () => goToSlide(index))
})

startCarouselAutoPlay()