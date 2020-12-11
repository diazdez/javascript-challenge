// from data.js
var tableData = data;

// YOUR CODE HERE!

// - confirming data array is available using console log
//console.log(tableData); 

// ** "... write code that appends a table to your web page and then adds new rows of data for each UFO sighting."

// so, similar to "D3_Table" Activity, I need to get a reference to the table body 

var tbody = d3.select("tbody")

// looping through each UFO sighting object in the data array
tableData.forEach(function(sighting) {
    console.log(sighting);

    // will need to append a table row `tr` for each sighting object
    var row = tbody.append("tr");

    // using `Object.entries` to console.log each sighting value
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);

      // appending a cell to the row for each value
      var cell = row.append("td");
      // using text to insert the data 
      cell.text(value);
    });
  });


// ** Use a date form in your HTML document and write JavaScript code that will listen for events 
// and search through the date/time column to find rows that match user input.


var button = d3.select("#filter-btn");

// using d3 `.on` to attach a click handler
button.on("click", function() 