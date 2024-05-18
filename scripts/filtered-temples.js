const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const mainHeading = document.querySelector("#main-heading");
const templeSection = document.querySelector("#temple-section");
const homeNavLink = document.querySelector("#home");
const oldNavLink = document.querySelector("#old");
const newNavLink = document.querySelector("#new");
const largeNavLink = document.querySelector("#large");
const smallNavLink = document.querySelector("#small");

hamButton.addEventListener('click', function() {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, USA",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, USA",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, USA",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Atlanta Georgia",
        location: "Sandy Springs, Georgia, USA",
        dedicated: "1983, June 1",
        area: 34500,
        imageUrl: 
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/1280x800/atlanta-temple-lds-811746-wallpaper.jpg"
    },
    {
        templeName: "Salvador Brazil",
        location: "Salvador, Brazil",
        dedicated: "2024, October 20",
        area: 31530,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/salvador-brazil-temple/salvador-brazil-temple-43493-main.jpg"
    },
    {
        templeName: "Lisbon Portugal",
        location: "Lisboa, Portugal",
        dedicated: "2019, September 15",
        area: 23730,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lisbon-portugal/1200x1200/02-e8863cabbdad35c4efdf1301e5b453cd7d622423.jpeg"
    }
];

function createTempleCard(filteredTemples) {
    templeSection.innerHTML = "";

    filteredTemples.forEach(element => {
        // Create new div tag for temple card
        const templeCard = document.createElement("div");
        templeCard.setAttribute("class", "temple-card");
    
        // Create new h3 tag for temple name
        const templeName = document.createElement("h3");
        templeName.textContent = element.templeName;
        templeCard.appendChild(templeName);
    
        // Create new p tag for location
        const location = document.createElement("p");
        location.innerHTML = `<span class="card-info-label">Location:</span> ${element.location}`;
        templeCard.appendChild(location);
    
        // Create new p tag for dedicated
        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<span class="card-info-label">Dedicated:</span> ${element.dedicated}`;
        templeCard.appendChild(dedicated);
    
        // Create new p tag for size
        const size = document.createElement("p");
        size.innerHTML = `<span class="card-info-label">Size:</span> ${element.area} sq ft`;
        templeCard.appendChild(size);
    
        // Create new img tag for the temple image
        const templeImg = document.createElement("img");
        templeImg.setAttribute("src", element.imageUrl);
        templeImg.setAttribute("alt", `${element.templeName} Temple image`);
        templeImg.setAttribute("loading", "lazy");
        templeImg.setAttribute("width", "300");
        templeImg.setAttribute("height", "150");
        templeCard.appendChild(templeImg);
    
        // Append temple card to temple section
        templeSection.appendChild(templeCard);
    });
}

createTempleCard(temples);

homeNavLink.addEventListener("click", () => {
    mainHeading.innerHTML = "Home";
    createTempleCard(temples);
});

oldNavLink.addEventListener("click", () => {
    mainHeading.innerHTML = "Old";
    let oldArray = temples.filter(element => {
        let dedicated = element.dedicated.split(",");
        return dedicated[0] < 1900;
    });
    createTempleCard(oldArray);
});

newNavLink.addEventListener("click", () => {
    mainHeading.innerHTML = "New";
    let newArray = temples.filter(element => {
        let dedicated = element.dedicated.split(",");
        return dedicated[0] > 2000;
    });
    createTempleCard(newArray);
});

largeNavLink.addEventListener("click", () => {
    mainHeading.innerHTML = "Large";
    let largeArray = temples.filter(element => {
        return element.area > 90000;
    });
    createTempleCard(largeArray);
});

smallNavLink.addEventListener("click", () => {
    mainHeading.innerHTML = "Small";
    let smallArray = temples.filter(element => {
        return element.area < 10000;
    });
    createTempleCard(smallArray);
});