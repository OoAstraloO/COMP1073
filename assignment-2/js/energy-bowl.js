class EnergyBowl 
{
    constructor(size, base, fruits, toppings, protein, instructions)
    {
        this.size = size;
        this.base = base;
        this.fruits = fruits;
        this.toppings = toppings;
        this.protein = protein;
        this.instructions = instructions;
    }

    getDescription()
    {
        return 
        `
        <h2>Your Energy Bowl:</h2>
        <p><strong>Size:</strong> ${this.size}</p>
        <p><strong>Base:</strong> ${this.base}</p>
        <p><strong>Special Fruits:</strong> ${this.fruits.join(", ")}</p>
        <p><strong>Toppings:</strong> ${this.toppings.join(", ")}</p>
        <p><strong>Protein:</strong> ${this.protein}</p>
        <p><strong>Instructions:</strong> ${this.instructions}</p>
        `;
    }
}

