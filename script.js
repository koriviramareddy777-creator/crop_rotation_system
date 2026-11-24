// SMART CROP ROTATION MANAGEMENT SYSTEM

// 1. Crop Recommendation Data

const cropRecommendations = {
    "Paddy": [
        "Black Gram",
        "Green Gram",
        "Groundnut"
    ],

    "Maize": [
        "Groundnut",
        "Black Gram",
        "Soybean"
    ],

    "Groundnut": [
        "Maize",
        "Pearl Millet",
        "Sorghum"
    ],

    "Black Gram": [
        "Paddy",
        "Maize",
        "Sorghum"
    ]
};


// 2. Crop Recommendation Function

function recommendCrop() {

    let previousCrop =
        document.getElementById("previousCrop").value;

    let result =
        document.getElementById("result");

    if (previousCrop === "") {
        result.innerHTML =
            "Please select your previous crop.";
        return;
    }

    let suggestions =
        cropRecommendations[previousCrop];

    result.innerHTML =
        "<h3>Recommended Crops</h3>" +
        "<p>Previous Crop: " + previousCrop + "</p>" +
        "<ul>" +
        suggestions.map(crop => "<li>" + crop + "</li>").join("") +
        "</ul>";
}


// 3. Seasonal Crop Data

const seasonalCrops = {

    "Kharif": [
        "Paddy",
        "Maize",
        "Groundnut",
        "Cotton",
        "Black Gram"
    ],

    "Rabi": [
        "Wheat",
        "Chickpea",
        "Mustard",
        "Green Gram",
        "Groundnut"
    ],

    "Zaid": [
        "Watermelon",
        "Cucumber",
        "Muskmelon",
        "Green Gram"
    ]

};


// 4. Seasonal Crop Planner Function

function showSeasonCrops() {

    let season =
        document.getElementById("season").value;

    let result =
        document.getElementById("seasonResult");

    if (season === "") {
        result.innerHTML =
            "Please select a season.";
        return;
    }

    let crops = seasonalCrops[season];

    result.innerHTML =
        "<h3>" + season + " Season Crops</h3>" +
        "<ul>" +
        crops.map(crop => "<li>" + crop + "</li>").join("") +
        "</ul>";
}


// 5. Welcome Message

console.log(
    "Smart Crop Rotation Management System Loaded Successfully!"
);
// Contact Form Functionality

document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("userName").value;

    document.getElementById("contactResult").innerHTML =
        "Thank you, " + name + "! Your feedback has been submitted.";

    document.getElementById("contactForm").reset();

});
// Contact Form Functionality

document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("userName").value;

    document.getElementById("contactResult").innerHTML =
        "Thank you, " + name + "! Your feedback has been submitted.";

    document.getElementById("contactForm").reset();

});