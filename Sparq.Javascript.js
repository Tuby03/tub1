// script.js
let entries = [];

function addRow() {
    const location = document.getElementById("location").value;
    const orientation = document.getElementById("orientation").value;
    const glassFactor = parseFloat(document.getElementById("glassFactor").value);
    const wallArea = parseFloat(document.getElementById("wallArea").value);
    const glassArea = parseFloat(document.getElementById("glassArea").value);
    const floorArea = parseFloat(document.getElementById("floorArea").value);
    const summerLoad = parseFloat(document.getElementById("summerLoad").value);

    if (!location || !orientation || isNaN(glassFactor) || isNaN(wallArea) || isNaN(glassArea) || isNaN(floorArea) || isNaN(summerLoad)) {
        alert("Please fill out all fields correctly.");
        return;
    }

    const summerTotalHeat = Math.floor(summerLoad / floorArea);

    entries.push(summerTotalHeat);

    const table = document.getElementById("sparosTable").getElementsByTagName("tbody")[0];
    const row = table.insertRow();
    row.innerHTML = `
        <td>${location}</td>
        <td>${orientation}</td>
        <td>${glassFactor}</td>
        <td>${wallArea}</td>
        <td>${glassArea}</td>
        <td>${floorArea}</td>
        <td>${summerLoad}</td>
        <td>${summerTotalHeat}</td>
    `;

    updateAverage();
    document.getElementById("sparosForm").reset();
}

function updateAverage() {
    const sum = entries.reduce((a, b) => a + b, 0);
    const avg = (entries.length > 0) ? (sum / entries.length).toFixed(2) : 0;
    document.getElementById("averageOutput").textContent = `Average Summer Total Heat: ${avg} W/m²`;
}
