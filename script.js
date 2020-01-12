const toggleMenuButton = document.querySelector("#toggle-menu");
const displayedMenu = document.querySelector(".menu");

toggleMenuButton.addEventListener("click", function(e){
    if(displayedMenu.style.top === "7vh") {
        displayedMenu.style.top = "-100vh";
    } else {
        displayedMenu.style.top = "7vh";
    }
    e.preventDefault();
});

