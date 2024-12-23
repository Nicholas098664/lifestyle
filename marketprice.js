





const farmProducts = [
    { name: "Wheat", pricePerKg: 50 },
    { name: "Rice", pricePerKg: 60 },
    { name: "Corn", pricePerKg: 40 },
    { name: "Potatoes", pricePerKg: 30 },
    { name: "Tomatoes", pricePerKg: 25 },
];

const farmTools = [
    { name: "Tractor", price: 1000000 },
    { name: "Plough", price: 20000 },
    { name: "Harvester", price: 800000 },
    { name: "Hoe", price: 500 },
    { name: "Sprayer", price: 1500 },
];

// farm products
const productList = document.querySelector("#farm-products ul");
farmProducts.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} <span>${product.pricePerKg} per kg</span>`;
    productList.appendChild(li);
});

//  farm tools
const toolList = document.querySelector("#farm-tools ul");
farmTools.forEach((tool) => {
    const li = document.createElement("li");
    li.innerHTML = `${tool.name} <span>${tool.price}</span>`;
    toolList.appendChild(li);
});