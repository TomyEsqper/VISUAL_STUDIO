const prices = {
    perro: 5000,
    hamburguesa: 7800,
    pizza: 6000,
    cocaCola: 5000,
    pepsi: 5000,
    manzana: 5000
};

const tableData = {
    1: {},
    2: {},
    3: {}
};

function updateQuantity(item, change) {
    const tableNumber = parseInt(document.getElementById('numTables').value);
    if (!tableData[tableNumber]) tableData[tableNumber] = {};

    if (!tableData[tableNumber][item]) tableData[tableNumber][item] = 0;

    tableData[tableNumber][item] += change;
    if (tableData[tableNumber][item] < 0) tableData[tableNumber][item] = 0;

    document.getElementById(`${item}Qty`).textContent = tableData[tableNumber][item];
    updateTotals();
}

function updateTotals() {
    const tableNumber = parseInt(document.getElementById('numTables').value);
    let total = 0;

    for (const item in prices) {
        const qty = tableData[tableNumber] && tableData[tableNumber][item] ? tableData[tableNumber][item] : 0;
        total += prices[item] * qty;
    }

    document.getElementById('totalCost').textContent = total;
}

function switchTable() {
    const tableNumber = parseInt(document.getElementById('numTables').value);
    const currentTableData = tableData[tableNumber] || {};

    for (const item in prices) {
        const qty = currentTableData[item] || 0;
        document.getElementById(`${item}Qty`).textContent = qty;
    }

    updateTotals();
}

function resetTable() {
    const tableNumber = parseInt(document.getElementById('numTables').value);

    for (const item in prices) {
        tableData[tableNumber][item] = 0;
        document.getElementById(`${item}Qty`).textContent = 0;
    }

    updateTotals();
}

// Initialize totals and quantities when the page loads
document.addEventListener('DOMContentLoaded', () => {
    switchTable();
});
