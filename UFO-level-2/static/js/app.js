// from data.js
var tableData = data;

// YOUR CODE HERE!

// - confirming data array is available using console log
//console.log(tableData); 

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

var button = d3.select("#filter-btn");
var buttonClear = d3.select("#clear-btn");

// var dateElement = d3.select("#datetime");
// var cityElement = d3.select("#city");
// var stateElement = d3.select("#state");
// var countryElement = d3.select("#country");
// var shapeElement = d3.select("#shape");

  button.on("click", function() {
  tbody.html("");
  var inputElement = d3.select("#input");
  var inputValue = inputElement.property("value");
  var filteredData = tableData.filter(ufo => 
    sighting.datetime === inputValue ||
    sighting.city === inputValue ||
    sighting.state === inputValue ||
    sighting.country === inputValue ||
    sighting.shape === inputValue);
  // display the data that was filtered
  showData(filteredData);

});

function showData(filteredData){
   // select the table body to insert table rows and cells
   var tbody = d3.select("tbody")
  // clear the table body to insert selected date values
  tbody.html("");
  filteredData.forEach(function(sighting){
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]){ 
      row.append("td").text(value); 
    })
  })
}

// clicking the RESET button will return all the data back to the page
buttonClear.on("click", function() {
  showData(tableData);
})
