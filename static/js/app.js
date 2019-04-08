// from data.js
var tableData = data;

// Select the input field - assign variable
var inputField = d3.select(".form-control");

// Select the submit button
var filterButton = d3.select("#filter-btn");

// Get a reference to the table body
var tbody = d3.select("tbody");

// Get a references for checkboxes and input fields

// datetime
var datetimeBox = d3.select(".datetime-box");
var datetimeField = d3.select("#datetime");

// city
var cityBox = d3.select(".city-box");
var cityField = d3.select("#city");

// state
var stateBox = d3.select(".state-box");
var stateField = d3.select("#state");

// country
var countryBox = d3.select(".country-box");
var countryField = d3.select("#country");

// shape
var shapeBox = d3.select(".shape-box");
var shapeField = d3.select("#shape");

// Display data on loading the page
appendTable(tableData);

// Create function filtering data table based on input value
function buttonClick() {
    //Create function variable for data
    var filteredData = tableData;
    //Reset the table body if data had been previously entered
    tbody.html("")
    // Prevent the page from refreshing
    d3.event.preventDefault();
    console.log("the button was clicked");

    // "if" functions to filter data if boxes are checked

    // datetime
    if (datetimeBox.property("checked")) {
        var filterValue = datetimeField.property("value");
        filteredData = filteredData.filter(function(data) {
            return data.datetime === filterValue;
        })
    }

    // city
    if (cityBox.property("checked")) {
        var filterValue = cityField.property("value");
        filteredData = filteredData.filter(function(data) {
            return data.city === filterValue;
        })
    }

    // state
    if (stateBox.property("checked")) {
        var filterValue = stateField.property("value");
        filteredData = filteredData.filter(function(data) {
            return data.state === filterValue;
        })
    }

    // country
    if (countryBox.property("checked")) {
        var filterValue = countryField.property("value");
        filteredData = filteredData.filter(function(data) {
            return data.country === filterValue;
        })
    }

    // shape
    if (shapeBox.property("checked")) {
        var filterValue = shapeField.property("value");
        filteredData = filteredData.filter(function(data) {
            return data.shape === filterValue;
        })
    }

    console.log(filteredData);

    // Go to "appendTable" function with filtered Data
    appendTable(filteredData)
}

// Create function to display filtered data
function appendTable(filteredData) {
    // Loop through each element in filteredData and append table elements with data
    filteredData.forEach(function(filteredSighting) {
        // Begin each iteration with appending a row
        var row = tbody.append("tr");
        // Iterate through each value in JS object
        Object.values(filteredSighting).forEach(function(value) {
            // Append row with td along with value information
            var entry = row.append("td");
            entry.text(value);
        });
    });

}