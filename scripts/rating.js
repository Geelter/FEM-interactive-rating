const optionList = document.querySelector('.rating__options');
const options = optionList.querySelectorAll('[role="listitem"]');

options.forEach(
    option => option.addEventListener('click', chooseRatingOption)
);

function chooseRatingOption(e) {
    const targetOption = e.target;

    options.forEach(
        option => option.setAttribute('data-chosen', false)
    );

    targetOption.setAttribute('data-chosen', true);
}