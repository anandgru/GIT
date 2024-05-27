document.addEventListener('DOMContentLoaded', () => {
    // Select the form and the button inside the form
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');

    // Create the new input element for the description
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.name = 'description';
    descriptionInput.id = 'description';
    descriptionInput.placeholder = 'Description';

    // Insert the new input element before the submit button
    form.insertBefore(descriptionInput, submitButton);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const fruitNameInput = document.getElementById('fruit-to-add');
        const fruitDescriptionInput = document.getElementById('description');

        const fruitName = fruitNameInput.value.trim();
        const fruitDescription = fruitDescriptionInput.value.trim();

        if (fruitName === '' || fruitDescription === '') {
            return; // Prevent adding empty fruit name or description
        }
        
        // Create new list item
        const li = document.createElement('li');
        li.classList.add('fruit');
        li.innerHTML = `${fruitName} <button class="delete-btn">x</button><br><p style="font-style: italic;">${fruitDescription}</p>`;

        // Append to the list
        const fruitList = document.querySelector('.fruits');
        fruitList.appendChild(li);

        // Clear input fields
        fruitNameInput.value = '';
        fruitDescriptionInput.value = '';
    });
});
const filter = document.getElementById("filter");

filter.addEventListener("keyup", function (event) {
const textEntered = event.target.value.toLowerCase();
const fruitItems = document.getElementsByClassName("fruit");

for (let i = 0; i < fruitItems.length; i++) {
const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
const fruitDescription = fruitItems[i].querySelector("p").textContent.toLowerCase();
if (currentFruitText.indexOf(textEntered) === -1 && fruitDescription.indexOf(textEntered)===-1) {
fruitItems[i].style.display = "none";
} else {
fruitItems[i].style.display = "";
}
}
});

