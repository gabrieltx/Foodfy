const cards = document.querySelectorAll('.card')
const details = document.querySelectorAll('.details')

for (const[index, card] of cards.entries()) {
    card.addEventListener("click", function() {
        window.location.href = `/recipes/${index}`
    })
}

for (const detail of details) {
    const button = detail.querySelector('a')

    button.addEventListener('click', function(){
        if(detail.querySelector('.recipeContent').classList.contains('hidden')){
            button.innerText = 'Hide'
            detail.querySelector('.recipeContent').classList.remove('hidden')
        }
        else {
            button.innerText = 'Show'
            detail.querySelector('.recipeContent').classList.add('hidden')
        }
    })
}