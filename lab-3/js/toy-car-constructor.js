// Toy Car Contrustor
function ToyCar(
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

let carCollection = [];

// Creates instance from form
function CreateCar()
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
    const openingParts = document.getElementById("openingParts").value;
    const detailedExterior = document.getElementById("detailedExterior").value;
    const collectible = document.getElementById("collectible").value;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;
    const sku = document.getElementById("sku").value;

    const newCar = new ToyCar (
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