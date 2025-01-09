var monthNames = ["January", "February", "March", "April",
                  "May", "June", "July", "August",
                  "September", "October", "November", "December"];
var monNames = ["Jan ", "Feb ", "Mar ", "Apr ", "May ", "Jun ",
                "Jul ", "Aug ", "Sep ", "Oct ", "Nov ", "Dec "];
var weekNames = ["First Sunday", "Second Sunday", "Third Sunday", "Fourth Sunday", "Fifth Sunday"];

var yearEl = document.querySelectorAll('.year');
var today = new Date();
var currYear = today.getFullYear();
//var currYear = 2009; // for testing
for (i = 0; i < yearEl.length; i++) {
    yearEl[i].textContent = currYear;
}

var dateMar28 = new Date(currYear, 2, 28);
// note that day numbers are 1-based, but month numbers are 0-11

// March 28 is the last possible date of the fourth Sunday in March
// If March 28 is a Sunday, subtract 0 to get the fourth Sunday
// If March 28 is a Monday, subtract 1 to get the fourth Sunday

var gaStateEl = document.querySelector(".gaStateDates");
gaStateEl.textContent = (dateMar28.getDate() - dateMar28.getDay() - 1) + "-" + (dateMar28.getDate() - dateMar28.getDay());


function addMonth(month, tableEl) {
    // Create the header
    var newRow = document.createElement("tr");
    newRow.setAttribute("class", "tr_grid_dark");
    var newCell = document.createElement("td");
    newCell.setAttribute("colspan", "2");
    newCell.textContent=monthNames[month];
    newRow.appendChild(newCell);
    tableEl.appendChild(newRow);
    // Create the weekly rows
    var sunday = new Date(currYear, month, 7);
    // The 7th is the last possible date of the first Sunday
    // Subtract the day number to get the actual first Sunday
    sunday.setDate(sunday.getDate() - sunday.getDay());

    for (wk = 0; wk < 4; wk++) {
        addWeek(sunday, wk, tableEl);
        sunday.setDate(sunday.getDate() + 7);
    }
    if (sunday.getMonth() === month) {
        addWeek(sunday, 4, tableEl);
    }

}

function addWeek(sunday, wk, tableEl) {
    var newRow = document.createElement("tr");
    var newCell = document.createElement("td");
    newCell.setAttribute("class", "td_grid sunday");
    newCell.textContent=weekNames[wk];
    newRow.appendChild(newCell);
    newCell = document.createElement("td");
    newCell.setAttribute("class", "td_grid date");
    newCell.textContent=monNames[sunday.getMonth()] + sunday.getDate();
    newRow.appendChild(newCell);
    tableEl.appendChild(newRow);
}

var table1 = document.querySelector("#janjun");
for (i = 0; i < 6; i++) {
    addMonth(i, table1);
}
var table2 = document.querySelector("#juldec");
for (i = 6; i < 12; i++) {
    addMonth(i, table2);
}