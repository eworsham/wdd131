/**************************************************** 
*
*           Common for all pages
*
****************************************************/

// Selectors
const currentYearSelector = document.querySelector("#currentYear");
const lastModifiedSelector = document.querySelector("#lastModified");
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

const today = new Date();

// Year and time stamp for footer
currentYearSelector.innerHTML = today.getFullYear();
lastModifiedSelector.innerHTML = `Last Modification: ${document.lastModified}`;

// Function to toggle open class
function toggleOpen(element) {
    element.classList.toggle('open');
}

// Menu button
hamButton.addEventListener("click", () => {
    toggleOpen(hamButton);
    toggleOpen(navigation);
});

/**************************************************** 
*
*           Event Page only
*
****************************************************/

// Selectors
const eventSection = document.querySelector("#events-section");
const allEvents = document.querySelector("#allEvents");
const thisMonth = document.querySelector("#thisMonth");
const nextMonth = document.querySelector("#nextMonth");

// Array of Event Objects
const events = [
    {
        eventName: "Group Run",
        location: "Etowah River Park",
        date: "June 10th, 2024",
        time: "6:00 PM"
    },
    {
        eventName: "The Bug Run 5k",
        location: "Boiling Park",
        date: "June 12th, 2024",
        time: "9:00 AM"
    },
    {
        eventName: "Peachtree Road Race",
        location: "3393 Peachtree Rd NE",
        date: "June 20th, 2024",
        time: "7:00 AM"
    },
    {
        eventName: "Group Run",
        location: "Etowah River Park",
        date: "June 26th, 2024",
        time: "6:00 PM"
    },
    {
        eventName: "AREA 13.1",
        location: "Riverside Park",
        date: "June 29th, 2024",
        time: "8:30 AM"
    },
    {
        eventName: "Cooldown 10k",
        location: "Etowah River Park",
        date: "July 3rd, 2024",
        time: "9:00 AM"
    },
    {
        eventName: "Fun Run",
        location: "3522 Crimson Rd",
        date: "July 10th, 2024",
        time: "11:00 AM"
    },
    {
        eventName: "Group Run",
        location: "Etowah River Park",
        date: "July 14th, 2024",
        time: "6:00 PM"
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
        eventLocation.innerHTML = `<span class="card-info-label">Location:</span> ${event.location}`;
        eventCard.appendChild(eventLocation);

        const eventDate = document.createElement("p");
        eventDate.innerHTML = `<span class="card-info-label">Date:</span> ${event.date}`;
        eventCard.appendChild(eventDate);

        const eventTime = document.createElement("p");
        eventTime.innerHTML = `<span class="card-info-label">Time:</span> ${event.time}`;
        eventCard.appendChild(eventTime);

        eventSection.appendChild(eventCard);
    });
}

// Function to filter event array by month
function filterByMonth(eventArray, month) {
    return eventArray.filter(event => {
        let date = event.date.split(" ");
        return date[0] === month;
    });
}

// Check that page is the events page before doing anything
if (eventSection) {
    // Call function to create events
    createEventCards(events);

    // Add event listener for All Events button
    allEvents.addEventListener("click", () => {
        createEventCards(events);
    });
    
    // Add event listener for This Month button
    thisMonth.addEventListener("click", () => {
        let thisMonthArray = filterByMonth(events, "June");
        createEventCards(thisMonthArray);
    });
    
    // Add event listener for Next Month button
    nextMonth.addEventListener("click", () => {
        let nextMonthArray = filterByMonth(events, "July");
        createEventCards(nextMonthArray);
    });
}

/**************************************************** 
*
*           Membership Page only
*
****************************************************/


