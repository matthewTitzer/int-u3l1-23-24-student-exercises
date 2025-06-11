// 1. Change "cute.dog"to your name (Keep the quotation marks!)
let username = "matthewTitzer";

// 2. Change the number of followers from 10000 to another number.
let followers = 10000;


// DO NOT CHANGE THE CODE BELOW
const names = document.querySelectorAll(".name");
names.forEach((name) => name.textContent = username);
document.querySelector(".followers").innerHTML = followers;
