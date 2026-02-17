"use strict";

document.addEventListener("DOMContentLoaded", () => 
{

const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

const htmlElement = document.documentElement;

function updateBackgroundColor() 
{
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;

  const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

  htmlElement.style.backgroundColor = rgbColor;

  console.log("Background color updated to: ", rgbColor);
}

redSlider.addEventListener("input", updateBackgroundColor);
greenSlider.addEventListener("input", updateBackgroundColor);
blueSlider.addEventListener("input", updateBackgroundColor);

updateBackgroundColor();
});