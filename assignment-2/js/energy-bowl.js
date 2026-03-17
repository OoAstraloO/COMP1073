// Defines the EnergyBowl class to represent a customized energy bowl order
class EnergyBowl 
{
    // Runs once a new EnergyBowl object is created and recieves the details of the bowl as parameters
    constructor(size, base, fruits, toppings, protein, instructions)
    {
        // Assignns the passed values to the properties of the EnergyBowl object
        this.size = size;
        this.base = base;
        this.fruits = fruits;
        this.toppings = toppings;
        this.protein = protein;
        this.instructions = instructions;
    }

    // Method which returns a formatted HTML description of the energy bowl, including all of its details
    getDescription()
    {
        return `
        <h2>Your Energy Bowl:</h2>
        <p><strong>Size:</strong> ${this.size}</p>
        <p><strong>Base:</strong> ${this.base}</p>
        <p><strong>Fruits:</strong> ${this.fruits.join(", ")}</p>
        <p><strong>Toppings:</strong> ${this.toppings.join(", ")}</p>
        <p><strong>Protein:</strong> ${this.protein}</p>
        <p><strong>Special Instructions:</strong> ${this.instructions}</p>
        `;
    }
}

