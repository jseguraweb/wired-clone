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

let giftIsSelected = true;
// console.log(`giftIsSelected is at the beginning ${giftIsSelected}`);
const changeSelectedButton = (event) => {
    if(giftIsSelected){
        // console.log("giftIsSelected is true!");
        event.style.border = "1px solid #057DBC";
        event.style.borderRadius = "10px";
        event.style.backgroundColor = "rgba(160, 209, 255, 0.541)";
        event.style.boxShadow = "inset 2px 2px 5px #057DBC"
        event.style.color = "#057DBC";
        event.firstElementChild.style.borderColor = "#057DBC";
        event.firstElementChild.style.backgroundColor = "rgb(46, 151, 207)";
        giftIsSelected = false;
        // console.log(`giftIsSelected is now ${giftIsSelected}`);
    } else {
        // console.log("giftIsSelected is false!");
        event.style.border = "1px solid grey";
        event.style.border = "none";
        event.style.backgroundColor = "transparent";
        event.style.boxShadow = "none"
        event.style.color = "grey";
        event.firstElementChild.style.borderColor = "grey";
        event.firstElementChild.style.backgroundColor = "transparent";
        giftIsSelected = true;
        // console.log(`giftIsSelected is now ${giftIsSelected}`);
    }
    
};

optionalGift.addEventListener("click", function(event){
    changeSelectedButton(optionalGift);
    event.preventDefault();
});