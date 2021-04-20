"use strict";

let element1 = document.getElementById("price1");
let element2 = document.getElementById("price2");

function jsonpCallback(data) {
  if (
    data.address.continent == "Europe" &&
    data.address.country != "United Kingdom"
  ) {
    element1.textContent = "€";
    element2.textContent = "€";
  } else if (data.address.country == "United Kingdom") {
    element1.textContent = "£";
    element2.textContent = "£";
  } else {
    element1.textContent = "$";
    element2.textContent = "$";
  }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
let navbar = document.querySelector(".navbar");

function icon() {
  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }
}
