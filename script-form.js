const toggleOptions = document.querySelector("#toggle-options");
const optionsMenu = document.querySelector("#options-menu");

toggleOptions.addEventListener("click", function(){
    if(optionsMenu.style.display === "flex"){
        optionsMenu.style.display = "none";
    } else {
        optionsMenu.style.display = "flex";
    }
});

const optionalGift = document.querySelector(".optional-gift");

const changeSelectedButton = (button) => {
    button.style.border = "1px solid #057DBC";
    button.style.borderRadius = "10px";
    button.style.backgroundColor = "rgba(160, 209, 255, 0.541)";
    button.style.boxShadow = "inset 2px 2px 5px #057DBC"
    button.style.color = "#057DBC";
    // optionalGift.firstElementChild.style.border = "solid #057DBC";
};

optionalGift.addEventListener("click", function(){
    changeSelectedButton(optionalGift);
})