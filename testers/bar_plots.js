var trace= {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margartia", "iced tea", "nonalcoholic run and coke", "nonalcoholic mai tai", "nonalcoholic gin and tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
}; 

var data= [trace];
var layout= {
    title: "'Pie' Chart"
}; 

Plotly.newPlot("plotArea", data, layout)


//  to change the chart from a bar graph to a pie chart the removal of the x and y axis NEEDS to be removed 
// to labels and values since x/y makes it too stiff and change the type to pie 
// title: "'Bar' Chart",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "% of Drinks Ordered"}