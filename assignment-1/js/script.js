"use strict";


const storySet1 = {
    character: ["A pirate", "A robot", "A monkey", "A princess", "A dragon"],
    action: ["found", "lost", "built", "stole", "discovered"],
    place: ["in the jungle", "on the moon", "under the sea", "at school", "inside a cave"],
    object: ["a magic lamp", "a giant sandwich", "a golden crown", "a mysterious map", "a tiny spaceship"],
    emotion: ["and felt happy!", "and got scared!", "and laughed loudly!", "and cried sadly.", "and became famous!"]
};

const storySet2 = {
    character: ["An explorer", "A detective", "An astronaut", "A knight", "A scientist"],
    action: ["searched for", "uncovered", "protected", "invented", "followed"],
    place: ["in the desert", "inside a castle", "on Mars", "in a secret lab", "deep underground"],
    object: ["an ancient treasure", "a hidden code", "a powerful weapon", "a strange signal", "a lost civilization"],
    emotion: ["and changed history.", "and saved the world!", "and solved the mystery.", "and made a breakthrough.", "and became a legend."]
};

let currentSet = storySet1;

let selections = {
    character: 0,
    action: 0,
    place: 0,
    object: 0,
    emotion: 0
};

const characterButton = document.getElementById("character");
const actionButton = document.getElementById("action");
const placeButton = document.getElementById("place");
const objectButton = document.getElementById("object");
const emotionButton = document.getElementById("emotion");

const showButton = document.getElementById("show");
const randomButton = document.getElementById("random");
const resetButton = document.getElementById("reset");
const toggleButton = document.getElementById("toggle");

const output = document.getElementById("storyOutput");

function cyclePart(partName, buttonElement) {

    const options = currentSet[partName];

    selections[partName]++;

    if (selections[partName] >= options.length) {
        selections[partName] = 0;
    }

    buttonElement.textContent = options[selections[partName]];
}

function showStory() {

    const story =
        currentSet.character[selections.character] + " " +
        currentSet.action[selections.action] + " " +
        currentSet.object[selections.object] + " " +
        currentSet.place[selections.place] + " " +
        currentSet.emotion[selections.emotion];

    output.textContent = story;

    speakStory(story);
}

function randomStory() {

    for (let part in selections) {
        selections[part] = Math.floor(Math.random() * currentSet[part].length);
    }

    characterButton.textContent = currentSet.character[selections.character];
    actionButton.textContent = currentSet.action[selections.action];
    placeButton.textContent = currentSet.place[selections.place];
    objectButton.textContent = currentSet.object[selections.object];
    emotionButton.textContent = currentSet.emotion[selections.emotion];

    showStory();
}

function resetStory() {

    selections = {
        character: 0,
        action: 0,
        place: 0,
        object: 0,
        emotion: 0
    };

    characterButton.textContent = "Character";
    actionButton.textContent = "Action";
    placeButton.textContent = "Place";
    objectButton.textContent = "Object";
    emotionButton.textContent = "Emotion";

    output.textContent = "";
}

function toggleStorySet() {
    currentSet = (currentSet === storySet1) ? storySet2 : storySet1;
    resetStory();
}

function speakStory(text) {

    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.cancel(); // prevents overlap
    window.speechSynthesis.speak(speech);
}

characterButton.addEventListener("click", () => cyclePart("character", characterButton));
actionButton.addEventListener("click", () => cyclePart("action", actionButton));
placeButton.addEventListener("click", () => cyclePart("place", placeButton));
objectButton.addEventListener("click", () => cyclePart("object", objectButton));
emotionButton.addEventListener("click", () => cyclePart("emotion", emotionButton));

showButton.addEventListener("click", showStory);
randomButton.addEventListener("click", randomStory);
resetButton.addEventListener("click", resetStory);
toggleButton.addEventListener("click", toggleStorySet);
