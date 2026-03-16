// Toy Car Contrustor
function toyCar(
    brand, 
    model, 
    year, 
    colour, 
    scale, 
    manufacturer, 
    material, 
    vehicleType, 
    tireType, 
    openingParts, 
    detailedExterior,
    collectible,
    price,
    stock,
    sku     
)
{
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.colour = colour;
    this.scale = scale;
    this.manufacturer = manufacturer;
    this.material = material;
    this.vehicleType = vehicleType;
    this.tireType = tireType;
    this.openingParts = openingParts;
    this.detailedExterior = detailedExterior;
    this.collectible = collectible;
    this.price = price;
    this.stock = stock;
    this.sku = sku;
}
toyCar.prototype.displayInfo = function() 
{
    return `<h3>SKU: ${this.sku}</h3> <br>
    <p>This ${this.vehicleType} car is a ${this.year} ${this.colour} ${this.brand} ${this.model}, with a scale of ${this.scale}. It was manufactured by ${this.manufacturer} and is made of ${this.material} with ${this.tireType} tires.  ${this.openingParts ? "It has" : "It does not have"} openning parts, ${this.detailedExterior ? "has" : "does not have"} a detailed exterior and ${this.collectible ? "is" : "is not"} a collectible. There are ${this.stock} currently in stock, priced at $${this.price}.</p>`
};

let carCollection = [];

// Creates instance from form
function createCar()
{
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const year = document.getElementById("year").value;
    const colour = document.getElementById("colour").value;
    const scale = document.getElementById("scale").value;
    const manufacturer = document.getElementById("manufacturer").value;
    const material = document.getElementById("material").value;
    const vehicleType = document.getElementById("vehicleType").value;
    const tireType = document.getElementById("tireType").value;
    const openingParts = document.getElementById("openingParts").checked;
    const detailedExterior = document.getElementById("detailedExterior").checked;
    const collectible = document.getElementById("collectible").checked;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;
    const sku = document.getElementById("sku").value;

    const newCar = new toyCar (
        brand,
        model,
        year,
        colour,
        scale, 
        manufacturer, 
        material, 
        vehicleType, 
        tireType, 
        openingParts, 
        detailedExterior,
        collectible,
        price,
        stock,
        sku 
    );

    carCollection.push(newCar);
    displayCars();
}

function displayCars() 
{
    const container = document.getElementById("carList");
    container.innerHTML = "";

    carCollection.forEach((car, index) => {
       const carCard = document.createElement("div");
       carCard.className = "car-card";

       carCard.innerHTML = `${car.displayInfo()}`;
    
       container.appendChild(carCard);
    })
}

