//import data from data.js
//create const variable: don't want the variable to be reassigned
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //clear any existing data by setting tbody to empty
    tbody.html("");

    //loop through each object in the data using foreach
    //It tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr").
    data.forEach((dataRow) => {
        //create a variable that will append a row to the table body
        let row = tbody.append("tr");
    });

    //loop through each field in the dataRow argument.
    //These fields will become table data and 
    //will be wrapped in <td> tags when they're appended to the HTML table.
    Object.values(dataRow).forEach((val) => {
        //create a variable to append data to a table
        let cell = row.append("td");
        //add the values
        cell.text(val);
    });
}

function handleClick() {
    //create a couple of variables to hold our date data, both filtered and unfiltered.
    let date = d3.select("#datetime").property("value");
    //need to set a default filter and save it to a new variable
    //By setting the filteredData variable to our raw data, we're basically using it as a blank slate.
    let filteredData = tableData;

    /// Check to see if a date was entered and filter the
    // data using that date.
    if(date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);

        // Rebuild the table using the filtered data
        // @NOTE: If no date was entered, then filteredData will
        // just be the original tableData.
        buildTable(filteredData);
    }
}

//Add event listener (Attach an event to listen for the form button)
d3.selectAll("#filter-btn").on("click", handleClick);

//Build final table (call buildTable) when the page loads
buildTable(tableData);
