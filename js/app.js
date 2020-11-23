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