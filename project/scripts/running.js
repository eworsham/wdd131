const currentYearSelector = document.querySelector("#currentYear");
const lastModifiedSelector = document.querySelector("#lastModified");
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

const today = new Date();

// Year and time stamp for footer
currentYearSelector.innerHTML = today.getFullYear();
lastModifiedSelector.innerHTML = `Last Modification: ${document.lastModified}`;

// Menu button
hamButton.addEventListener("click", () => {
    hamButton.classList.toggle('open');
    navigation.classList.toggle('open');
});