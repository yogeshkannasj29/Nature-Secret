let valueSize = "";

document.getElementById("thousand").addEventListener('click', thousandButton);
document.getElementById("fivehundred").addEventListener('click', fivehundred);
document.getElementById("orderNow").addEventListener('click', orderNow);

function thousandButton() {
    document.getElementById('thousand').style.backgroundColor = 'blueviolet';
    document.getElementById('thousand').style.color = 'white';
    document.getElementById('fivehundred').style.backgroundColor = 'pink';
    document.getElementById('fivehundred').style.color = 'blueviolet';
    valueSize = "1000";
}
function fivehundred() {
    document.getElementById('fivehundred').style.backgroundColor = 'blueviolet';
    document.getElementById('fivehundred').style.color = 'white';
    document.getElementById('thousand').style.backgroundColor = 'pink';
    document.getElementById('thousand').style.color = 'blueviolet';
    valueSize = "500";
}
function orderNow() {
    if (valueSize) {
        document.getElementById('product').style.display = "none";
        document.getElementById('orderNow').style.backgroundColor = 'pink';
        // Create a new iframe element
        var iframe = document.createElement("iframe");

        // Set the iframe's attributes
        iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSewFhGYMmVr9kcp5E-lcvGuIxGSuHglTS4mSWlQcc8wSTcQtA/viewform?embedded=true";
        iframe.width = "100%";
        iframe.height = "500";
        iframe.frameBorder = "0";
        iframe.marginHeight = "0";
        iframe.marginWidth = "0";

        // Assign an ID to the iframe
        iframe.id = "myIframe";

        // Append the iframe to a container div with the ID "iframeContainer"
        var container = document.getElementById("iframeContainer");
        container.appendChild(iframe);

        if (valueSize == "500") {
            var elements = document.getElementsByClassName("Od2TWd hYsg7c i9xfbb");
            console.log(valueSize)
            if (elements.length > 0) {
                elements[0].setAttribute("aria-checked", "true");
            }
        } else if(valueSize == "1000"){
            var elements = document.getElementsByClassName("Od2TWd hYsg7c i9xfbb N2RpBe");
            console.log(valueSize)
            if (elements.length > 0) {
                elements[0].setAttribute("aria-checked", "true");
            }
        }

    } else {
        alert("Please choose the size")
    }

}



var loc = window.navigator.appVersion;
console.log(loc);


// Get Location 
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log("Latitude: " + latitude + ", Longitude: " + longitude);

        // Use the user's location as needed
    }, function (error) {
        console.error("Error getting location: " + error.message);
    });
} else {
    console.log("Geolocation is not available in this browser.");
}

//   Carousels

// const container = document.querySelector(".carousel-container");
// const slides = document.querySelectorAll(".carousel-slide");
// const prevButton = document.querySelector(".carousel-prev");
// const nextButton = document.querySelector(".carousel-next");

// let currentIndex = 0;

// function updateCarousel() {
//   const slideWidth = slides[0].offsetWidth;
//   container.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
// }

// prevButton.addEventListener("click", () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateCarousel();
//   }
// });

// nextButton.addEventListener("click", () => {
//   if (currentIndex < slides.length - 1) {
//     currentIndex++;
//     updateCarousel();
//   }
// });

// // Optional: Add automatic sliding
// function autoSlide() {
//   setInterval(() => {
//     if (currentIndex < slides.length - 1) {
//       currentIndex++;
//     } else {
//       currentIndex = 0;
//     }
//     updateCarousel();
//   }, 3000); // Adjust the time interval as needed
// }

// autoSlide();

