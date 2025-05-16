
// Make a table and add data dynamically with help of DOM

function addRow() {
    // Get input values
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;

    if (!name || !age) {
        alert("Please fill both fields!");
        return;
    }

    // Get table body
    const tableBody = document.getElementById("tableBody");

    // Create a new row
    const newRow = document.createElement("tr");

    // Add cells (Name, Age, Delete Button)
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
    `;

    // Append row to table
    tableBody.appendChild(newRow);

    // Clear inputs
    document.getElementById("nameInput").value = "";
    document.getElementById("ageInput").value = "";
}

function deleteRow(button) {
    // Remove the row when "Delete" is clicked
    const row = button.closest("tr");
    row.remove();
}