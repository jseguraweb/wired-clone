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
const optionalGift = document.querySelectorAll(".option-gift")[0];
const giftCheck = document.querySelector("#gift");
const check = document.querySelector("#check");
const optionalGift2 = document.querySelectorAll(".option-gift")[1]
const oneYearGift = document.querySelector("#gift2");
const check2 = document.querySelector("#check2");

let giftIsSelected = true;
// console.log(`giftIsSelected is at the beginning ${giftIsSelected}`);
const changeSelectedButton = (event) => {
    if(giftIsSelected){
        // console.log("giftIsSelected is true!");
        event.classList.add("pressed-button");
        event.children[0].children[0].children[0].style.stroke = "#057DBC";
        giftCheck.checked = true;
        giftIsSelected = false;
        // console.log(`giftIsSelected is now ${giftIsSelected}`);
    } else {
        // console.log("giftIsSelected is false!");
        event.classList.remove("pressed-button");
        event.children[0].children[0].children[0].style.stroke = "#fff";
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

optionalGift2.addEventListener("click", function(event){
    changeSelectedButton(optionalGift2);
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
        eventOne.lastElementChild.checked = true;
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


// step 2: plan

const oneYearPlan = document.querySelectorAll(".select-button")[0];
const sixMonthsBigPlan = document.querySelectorAll(".select-button")[1];
const sixMonthsSmallPlan = document.querySelectorAll(".select-button")[2];
const popularLabel = document.querySelector(".popular");

if(oneYearPlan.classList.contains("pressed-button")){
    popularLabel.style.opacity = "1";
}

const changePlan = (eventOne, eventTwo, eventThree) => {
    if(eventOne.classList.contains("pressed-button")){
        eventOne.lastElementChild.checked = true;
    } else {
        eventTwo.classList.remove("pressed-button");
        eventTwo.parentElement.parentElement.classList.remove("selected-card");
        eventTwo.parentElement.previousElementSibling.previousElementSibling.style.opacity = "0";
        eventThree.classList.remove("pressed-button");
        eventThree.parentElement.parentElement.classList.remove("selected-card");
        eventThree.parentElement.previousElementSibling.previousElementSibling.style.opacity = "0";
        eventOne.classList.add("pressed-button");
        eventOne.parentElement.parentElement.classList.add("selected-card");
        eventOne.parentElement.previousElementSibling.previousElementSibling.style.opacity = "1";
        eventOne.lastElementChild.checked = true;
    }
};

oneYearPlan.addEventListener("click", function(){
    changePlan(oneYearPlan, sixMonthsBigPlan, sixMonthsSmallPlan);
});

sixMonthsBigPlan.addEventListener("click", function(){
    changePlan(sixMonthsBigPlan, sixMonthsSmallPlan, oneYearPlan);
});

sixMonthsSmallPlan.addEventListener("click", function(){
    changePlan(sixMonthsSmallPlan, oneYearPlan, sixMonthsBigPlan);
});


// step 3: payment

const creditCardButton = document.querySelectorAll(".pay-button")[0];
const amazonButton = document.querySelectorAll(".pay-button")[1];
const paypalButton = document.querySelectorAll(".pay-button")[2];

const changePayment = (eventOne, eventTwo, eventThree) => {
    if(eventOne.classList.contains("pressed-button")){
        eventOne.lastElementChild.checked = true;
    } else {
        eventTwo.classList.remove("pressed-button");
        eventThree.classList.remove("pressed-button");
        eventOne.classList.add("pressed-button");
        eventOne.lastElementChild.checked = true;
    }
};

const creditCardPayment = document.querySelector(".payment-with-cc");
const amazonPayment = document.querySelector(".payment-with-amazon");
const paypalPayment = document.querySelector(".payment-with-paypal");

creditCardButton.addEventListener("click", function(){
    changePayment(creditCardButton, amazonButton, paypalButton);
    creditCardPayment.style.display = "grid";
    amazonPayment.style.display = "none";
    paypalPayment.style.display = "none";
});

amazonButton.addEventListener("click", function(){
    changePayment(amazonButton, paypalButton, creditCardButton);
    amazonPayment.style.display = "block";
    paypalPayment.style.display = "none";
    creditCardPayment.style.display = "none";
});

paypalButton.addEventListener("click", function(){
    changePayment(paypalButton, creditCardButton, amazonButton);
    paypalPayment.style.display = "block";
    creditCardPayment.style.display = "none";
    amazonPayment.style.display = "none";
});


// other payment methods





