var sortedCities= cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

console.log(sortedCities)

var topFiveCities= sortedCities.slice(0,5);

console.log(topFiveCities);

// you could combine the map and slice- just add alice to the end of the map function with .slice()

var topFiveCityNames = cityGrowths.map(city => city.City).slice(0,5);

console.log(topFiveCityNames);

var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016)).slice(0,5);
console.log(topFiveCityGrowths);

var trace= {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};

var data= [trace];
var layout= {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);