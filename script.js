/* ----- VARIABLES DECLARATIONS -----*/

let ratings = document.querySelectorAll(".rating_list_item");
let rateSpan = document.getElementById("rate_span");
let submitButton = document.getElementsByClassName("rating_card_button");
let landingCard = document.querySelector(".rating_card_landing");
let submittedCard = document.querySelector(".rating_card_submitted");

/* ----- FUNCTION DECLARATIONS -----*/

let loadingScreen = function() {
    document.querySelector(".loader_container").classList.add("hidden");
}

/* ----- CODE -----*/

for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener('click', () => {
        let rating = ratings[i].innerHTML;

        for (let i = 0; i < ratings.length; i++) {
            ratings[i].classList.contains("selected");
            ratings[i].classList.remove("selected");
        }
        ratings[i].classList.add('selected');

        submitButton[0].addEventListener('click', () => {
            setTimeout(loadingScreen, 2000);
            landingCard.style.display = "none";
            submittedCard.style.display = "block";
        })

        rateSpan.innerHTML = rating;
    });
}
