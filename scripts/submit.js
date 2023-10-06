const submitButton = document.querySelector('.rating__button');

submitButton.addEventListener('click', submitRating);

function submitRating(e) {
    const chosenRating = document.querySelector('[data-chosen="true"]');

    if (chosenRating) {
        const chosenRatingValue = chosenRating.getAttribute('data-rating');
        handleTemplateChange(chosenRatingValue);
    }
}

function handleTemplateChange(ratingValue) {
    const wrapper = document.querySelector('.wrapper');
    const rating = document.querySelector('.rating');

    const appreciation = document.createElement("article");
    appreciation.classList.add("appreciation", "flow");
    appreciation.innerHTML = createAppreciationContent(ratingValue);

    wrapper.removeChild(rating);
    wrapper.appendChild(appreciation);
}

function createAppreciationContent(ratingValue) {
    const markup = 
        `<img
            aria-hidden="true"
            src="./images/illustration-thank-you.svg"
            alt=""
        />

        <p class="appreciation__subheading fs-200 fw-regular">
            You selected ${ratingValue} out of 5
        </p>

        <h2 class="appreciation__heading fs-600 fw-bold">Thank you!</h2>

        <p class="appreciation__content">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
        </p>`;

    return markup;
}