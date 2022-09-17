var trace = [{
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
}];

var layout = {
    title: "Lucheon Survery",
    xaxis: {title: "Food Options"},
    yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("plotArea", trace, layout);

