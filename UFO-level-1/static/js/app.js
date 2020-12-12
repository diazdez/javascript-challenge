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

// buttons are an id in html (so we use # )
// created a "Reset" to clear the filtered search 
var button = d3.select("#filter-btn");
var buttonClear = d3.select("#clear-btn");

var form = d3.select("form");

// creating click handler using d3 ".on"
button.on("click", runEnter);
form.on("submit", runEnter);


// complete the event handler function for the form
function runEnter() {
  // to prevent the page from refreshing using default 
  d3.event.preventDefault();
  // select the input element and get the raw HTML node (class "form-group")
  var inputElement = d3.select(".form-control");
  // get the value property of the input element
  var inputDate = inputElement.property("value");
  // printing the value to the console: 
  console.log(inputDate)
  // filter data for the date value to get data that is searched for
  var filteredData = tableData.filter(sighting => sighting.datetime === inputDate);
  console.log(filteredData);
  // display the data that was filtered
  showData(filteredData)
 

};

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
