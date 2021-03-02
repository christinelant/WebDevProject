const carousel = new Siema({
    selector: '.carousel-container',
    loop: true
});

const leftArrow = document.querySelector(".prev")
const rightArrow = document.querySelector(".next")

leftArrow.addEventListener('click', () => carousel.prev())
rightArrow.addEventListener('click', () => carousel.next())

setInterval(function () {
    rightArrow.click()
}, 5000)