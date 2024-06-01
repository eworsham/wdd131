const currentYearSelector = document.querySelector("#currentYear");
const lastModifiedSelector = document.querySelector("#lastModified");
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const eventSection = document.querySelector("#events-section");

const today = new Date();

// Year and time stamp for footer
currentYearSelector.innerHTML = today.getFullYear();
lastModifiedSelector.innerHTML = `Last Modification: ${document.lastModified}`;

// Menu button
hamButton.addEventListener("click", () => {
    hamButton.classList.toggle('open');
    navigation.classList.toggle('open');
});

// Array of Event Objects
const events = [
    {
        eventName: "Event 1",
        location: "Etowah River Park",
        date: "June 10th, 2024",
        time: "11:00 AM"
    },
    {
        eventName: "Event 2",
        location: "Etowah River Park",
        date: "June 10th, 2024",
        time: "11:00 AM"
    }
]

// Function to create event card given an array of event objects
function createEventCards(events) {
    eventSection.innerHTML = "";

    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.setAttribute("class", "event-card");

        const eventName = document.createElement("h3");
        eventName.textContent = event.eventName;
        eventCard.appendChild(eventName);

        const eventLocation = document.createElement("p");
        eventLocation.textContent = event.location;
        eventCard.appendChild(eventLocation);

        const eventDate = document.createElement("p");
        eventDate.textContent = event.date;
        eventCard.appendChild(eventDate);

        const eventTime = document.createElement("p");
        eventTime.textContent = event.time;
        eventCard.appendChild(eventTime);

        eventSection.appendChild(eventCard);
    });
}

// Call function to create events
createEventCards(events);