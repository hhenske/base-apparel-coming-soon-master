"use strict"

let email = document.getElementById("name.email");
let dangerIcon = document.getElementById("danger-button");
let dangerText = document.getElementById("danger-text");
let form = document.getElementById("form");

console.log(email)

form.addEventListener("submit", (email) => {
    if (email.length > 7 ) {
        dangerIcon.style.visibility = hidden;
        dangerText.style.visibility = hidden;
        console.log(email.length)
        console.log("valid email")
    } else {
        e.preventDefault();
        // dangerIcon.style.visibility = true;
        // dangerText.style.opacity = true; 
        console.log(email.length)
        console.log("invalid email")
    }
});

// && email.contains("@") && email.contains(".")