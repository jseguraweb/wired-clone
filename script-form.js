// "more options" at the top right of the screen

const toggleOptions = document.querySelector("#toggle-options");
const optionsMenu = document.querySelector("#options-menu");

toggleOptions.addEventListener("click", function(){
    if(optionsMenu.style.display === "flex"){
        optionsMenu.style.display = "none";
    } else {
        optionsMenu.style.display = "flex";
    }
});


// "This is a gift" option at the beginning of the form

// optionalGift is an input
const optionalGift = document.querySelector(".switch");
const giftCheck = document.querySelector("#gift");
const check = document.querySelector("#check");

let giftIsSelected = true;
// console.log(`giftIsSelected is at the beginning ${giftIsSelected}`);
const changeSelectedButton = (event) => {
    if(giftIsSelected){
        // console.log("giftIsSelected is true!");
        event.classList.add("pressed-button");
        check.style.stroke = "#057DBC";
        giftCheck.checked = true;
        giftIsSelected = false;
        // console.log(`giftIsSelected is now ${giftIsSelected}`);
    } else {
        // console.log("giftIsSelected is false!");
        event.classList.remove("pressed-button");
        check.style.stroke = "#fff";
        event.firstElementChild.style.backgroundColor = "transparent";
        giftCheck.checked = false;
        giftIsSelected = true;
        // console.log(`giftIsSelected is now ${giftIsSelected}`);
    }
};

optionalGift.addEventListener("click", function(event){
    changeSelectedButton(optionalGift);
    event.preventDefault();
});


// Step 1. Location:

const marketUS = document.querySelectorAll(".market")[0];
const marketInt = document.querySelectorAll(".market")[1];
const otherCountries = document.querySelector(".deliver-to");

const changeMarket = (eventOne, eventTwo) => {
    if(eventOne.classList.contains("pressed-button")){
        eventOne.lastElementChild.checked = true;
    } else {
        eventTwo.classList.remove("pressed-button");
        eventOne.classList.add("pressed-button");
        event.lastElementChild.checked = true;
    }
};

marketUS.addEventListener("click", function(){
    changeMarket(marketUS, marketInt);
});

marketInt.addEventListener("click", function(){
    changeMarket(marketInt, marketUS);
});

marketInt.addEventListener("click", function(){
    otherCountries.style.display = "flex";
});

marketUS.addEventListener("click", function(){
    otherCountries.style.display = "none";
});