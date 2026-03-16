document.getElementById("bowlForm").addEventListener("submit", function(event)
{
    event.preventDefault();

    const size = document.getElementById("size").value;
    const base = document.getElementById("base").value;
    const fruits = [];
    document.querySelectorAll("input[name='fruits']:checked").forEach(input => fruits.push(input.value));
    const toppings = [];
    document.querySelectorAll("input[name='toppings']:checked").forEach(input => toppings.push(input.value));   
    const protein = document.getElementById("protein").value;
    const instructions = document.getElementById("instructions").value;

});