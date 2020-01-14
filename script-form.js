const toggleOptions = document.querySelector("#toggle-options");
const optionsMenu = document.querySelector("#options-menu");

toggleOptions.addEventListener("click", function(){
    if(optionsMenu.style.display === "flex"){
        optionsMenu.style.display = "none";
    } else {
        optionsMenu.style.display = "flex";
    }
});

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