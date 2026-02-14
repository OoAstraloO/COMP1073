"use strict";

// First story set
const storySet1 = 
{
    character: ["A pirate", "A robot", "A monkey", "A princess", "A dragon"],
    action: ["found", "lost", "built", "stole", "discovered"],
    place: ["in the jungle", "on the moon", "under the sea", "at school", "inside a cave"],
    object: ["a magic lamp", "a giant sandwich", "a golden crown", "a mysterious map", "a tiny spaceship"],
    emotion: ["and felt happy!", "and got scared!", "and laughed loudly!", "and cried sadly.", "and became famous!"]
};

// Second story set
const storySet2 = 
{
    character: ["An explorer", "A detective", "An astronaut", "A knight", "A scientist"],
    action: ["searched for", "uncovered", "protected", "invented", "followed"],
    place: ["in the desert", "inside a castle", "on Mars", "in a secret lab", "deep underground"],
    object: ["an ancient treasure", "a hidden code", "a powerful weapon", "a strange signal", "a lost civilization"],
    emotion: ["and changed history.", "and saved the world!", "and solved the mystery.", "and made a breakthrough.", "and became a legend."]
};

// Sets the initial story set to the first one
let currentSet = storySet1;

// Track current selections for each part of the story
let selections = 
{
    character: 0,
    action: 0,
    place: 0,
    object: 0,
    emotion: 0
};

// Get references to all buttons and output area

// Story Category Buttons
const characterButton = document.getElementById("character");
const actionButton = document.getElementById("action");
const placeButton = document.getElementById("place");
const objectButton = document.getElementById("object");
const emotionButton = document.getElementById("emotion");

// Action Buttons
const showButton = document.getElementById("show");
const randomButton = document.getElementById("random");
const resetButton = document.getElementById("reset");
const toggleButton = document.getElementById("toggle");

// Output area
const output = document.getElementById("storyOutput");

// Cycles through the options for a given story part and updates the button text
function cyclePart(partName, buttonElement) 
{

    // Gets the options for the current story set and part
    const options = currentSet[partName];

    // Moves to the next option for the given part
    selections[partName]++;

    // Returns to first option if gone past the last option
    if (selections[partName] >= options.length) 
    {
        selections[partName] = 0;
    }

    // Updates the button's text to reflect the current selection
    buttonElement.textContent = options[selections[partName]];
}

// Combines selected story parts into a full story and displays it, also speaking the story aloud
function showStory() 
{
    // Combines the selected parts into a full story in order
    const story =
        currentSet.character[selections.character] + " " +
        currentSet.action[selections.action] + " " +
        currentSet.object[selections.object] + " " +
        currentSet.place[selections.place] + " " +
        currentSet.emotion[selections.emotion];

    // Displays the story in the output area
    output.textContent = story;

    speakStory(story);
}

// Generates a completely random story by selecting random options for each part
function randomStory() 
{
    // Loops through each part and selects a random index
    for (let part in selections) 
    {
        selections[part] = Math.floor(Math.random() * currentSet[part].length);
    }

    // Updates all buttons to reflect the new random selections
    characterButton.textContent = currentSet.character[selections.character];
    actionButton.textContent = currentSet.action[selections.action];
    placeButton.textContent = currentSet.place[selections.place];
    objectButton.textContent = currentSet.object[selections.object];
    emotionButton.textContent = currentSet.emotion[selections.emotion];

    showStory();
}

// Resets all selections and buttons to default state
function resetStory() 
{
    // Resets selection indexes
    selections = 
    {
        character: 0,
        action: 0,
        place: 0,
        object: 0,
        emotion: 0
    };

    // Resets button text to default labels
    characterButton.textContent = "Character";
    actionButton.textContent = "Action";
    placeButton.textContent = "Place";
    objectButton.textContent = "Object";
    emotionButton.textContent = "Emotion";

    // Clears story output
    output.textContent = "";
}

// Toggles between the story sets
function toggleStorySet() 
{
    currentSet = (currentSet === storySet1) ? storySet2 : storySet1;
    resetStory();
}
// Speaks the given text using the brower's speech synthesis capabilities
function speakStory(text) 
{

    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    // Stops any previous speech to prevent overlap
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
}

// Cycles through options when a story part button is clicked
characterButton.addEventListener("click", () => cyclePart("character", characterButton));
actionButton.addEventListener("click", () => cyclePart("action", actionButton));
placeButton.addEventListener("click", () => cyclePart("place", placeButton));
objectButton.addEventListener("click", () => cyclePart("object", objectButton));
emotionButton.addEventListener("click", () => cyclePart("emotion", emotionButton));

// Shows the full story
showButton.addEventListener("click", showStory);

// Generates a random story
randomButton.addEventListener("click", randomStory);

// Resets the story to default state
resetButton.addEventListener("click", resetStory);

// Toggles between the two story sets
toggleButton.addEventListener("click", toggleStorySet);
