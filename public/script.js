const cards = document.querySelectorAll('.card')
const details = document.querySelectorAll('.details')
const addIngredientButton = document.querySelector(".add-ingredient")
const addStepButton = document.querySelector(".add-step")

for (const[id, card] of cards.entries()) {
    const index = card.getAttribute('id')
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


function addIngredient(){
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");
    
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    if (newField.children[0].value == "") return false;
    newField.children[0].value = "";
    ingredients.appendChild(newField);
}

addIngredientButton.addEventListener("click", addIngredient);

function addStep(){
    const steps = document.querySelector("#steps");
    const fieldContainer = document.querySelectorAll(".step");
    
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    if (newField.children[0].value == "") return false;
    newField.children[0].value = "";
    steps.appendChild(newField);
}

addStepButton.addEventListener("click", addStep);
