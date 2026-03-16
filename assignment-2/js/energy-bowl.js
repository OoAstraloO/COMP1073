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
        <p>Size: ${this.size}</p>
        <p>Base: ${this.base}</p>
        <p>Fruits: ${this.fruits.join(", ")}</p>
        <p>Toppings: ${this.toppings.join(", ")}</p>
        <p>Protein: ${this.protein}</p>
        <p>Instructions: ${this.instructions}</p>
        `;
    }
}

