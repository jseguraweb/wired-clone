const toggleMenuButton = document.querySelector("#toggle-menu");
const displayedMenu = document.querySelector(".menu");

const toggleOptions = document.querySelector("#toggle-options");
const optionMenu = document.querySelector(".options-menu");

toggleMenuButton.addEventListener("click", function(e){
    if(displayedMenu.style.top === "7vh") {
        displayedMenu.style.top = "-100vh";
    } else {
        displayedMenu.style.top = "7vh";
    }
    e.preventDefault();
});

toggleOptions.addEventListener("click", function(e){
    optionMenu.style.display === "flex" ? optionMenu.style.display = "none" : optionMenu.style.display = "flex";
    e.preventDefault();
});