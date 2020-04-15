const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {

    const cardId = card.getAttribute("id")
    const recipeTitle = card.querySelector('.recipeTitle').textContent
    const recipeOwner = card.querySelector('.recipeOwner').textContent
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("img").src = `/assets/${cardId}.png`
    modalOverlay.querySelector("img").alt = `${cardId}`
    modalOverlay.querySelector("h1").innerHTML = recipeTitle
    modalOverlay.querySelector("h2").innerHTML = recipeOwner
    })
}
document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})