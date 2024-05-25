const reviewCountLocator = document.querySelector("#reviewCount");

let reviewCount = localStorage.getItem("reviewCount");

document.addEventListener("readystatechange", event => {
    if (event.target.readyState === "complete") {
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount)
        
        reviewCountLocator.innerHTML = `Total reviews submitted: ${reviewCount}`
    }
});
