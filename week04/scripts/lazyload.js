const currentYearSelector = document.querySelector("#currentYear");
const lastModifiedSelector = document.querySelector("#lastModified");

const today = new Date();

currentYearSelector.innerHTML = today.getFullYear();
lastModifiedSelector.innerHTML = `Last Modification: ${document.lastModified}`;