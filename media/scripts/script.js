/*
    Student Name: Carter Stancil
    File Name: script.js
    Todays Date: 9/19/23
*/

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

