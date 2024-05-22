document.addEventListener("DOMContentLoaded", function(){
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const hamburgerButton = document.getElementById("hamburger-button");
    hamburgerButton.addEventListener("click", () => {
      hamburgerMenu.classList.toggle("hidden");
    });
    });
    