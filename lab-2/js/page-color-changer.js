"use strict";

// Waits for the entire HTML document to load and parse before running the script
document.addEventListener("DOMContentLoaded", () => 
{

    // Gets references to the RGB range sliders
    const redSlider = document.getElementById("red");
    const greenSlider = document.getElementById("green");
    const blueSlider = document.getElementById("blue");

    // Gets referemce to the HTML element to change the background colour
    const htmlElement = document.documentElement;

    // Updates the background colour based on the current values of the RGB sliders
    function updateBackgroundColor() 
    {
        // Retrieves the current values from each sliders
        const redValue = redSlider.value;
        const greenValue = greenSlider.value;
        const blueValue = blueSlider.value;

        // Creates an RGB colour string using the slider values
        const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

        // Applies the new RGB colour to the background of the HTML element
        htmlElement.style.backgroundColor = rgbColor;

        // Outputs the updated RGB colour to the console for debugging purposes
        console.log("Background color updated to: ", rgbColor);
    }

    // Triggers the fuction while the user is adjusting any of the RGB sliders
    redSlider.addEventListener("input", updateBackgroundColor);
    greenSlider.addEventListener("input", updateBackgroundColor);
    blueSlider.addEventListener("input", updateBackgroundColor);

    // Initializes the background colour when the page first loads
    updateBackgroundColor();
});