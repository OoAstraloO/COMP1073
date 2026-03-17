// Adds an event listener to the form, which runs when the form is submitted
document.getElementById("bowlForm").addEventListener("submit", function(event)
{
    // Prevents the default form submission behaviour
    event.preventDefault();

    // Gets the values from the form inputs and stores them in variables
    const size = document.querySelector("input[name='size']:checked").value;
    const base = document.querySelector("input[name='base']:checked").value;
    const protein = document.querySelector("input[name='proteins']:checked").value;
    const instructions = document.querySelector("textarea[name='instructions']").value;

    // Creates arrays to store the selected fruits and toppings, poppulating them with the values of the boxes that are checked
    const fruits = [];
    document.querySelectorAll("input[name='fruits']:checked").forEach(input => fruits.push(input.value));
    const toppings = [];
    document.querySelectorAll("input[name='toppings']:checked").forEach(input => toppings.push(input.value)); 

    // Creates a new instance of the EnergyBowl class using the values from the form inputs
    const energyBowl = new EnergyBowl(size, base, fruits, toppings, protein, instructions);

    // Displays the description of the energy bowl in the order summary section of the page
    document.getElementById("orderSummary").innerHTML = energyBowl.getDescription();
});