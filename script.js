window.onload = function () {
    let icon = document.querySelector(".hamburger i");
    let mobile = document.querySelector(".mobile");
    icon.addEventListener("click", function (){

        if(mobile.style.display == "none") {
            mobile.style.display = "inherit";
        }
        else{
            mobile.style.display = "none";
        }
    });
};