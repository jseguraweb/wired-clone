const toggleOptions = document.querySelector("#toggle-options");
const optionsMenu = document.querySelector("#options-menu");

toggleOptions.addEventListener("click", function(){
    if(optionsMenu.style.display === "flex"){
        optionsMenu.style.display = "none";
    } else {
        optionsMenu.style.display = "flex";
    }
});