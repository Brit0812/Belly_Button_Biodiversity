const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));


//line 7 will pull a specific onject- remember 0= 1 so its pulling the FIRST object! 
d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));
// if wed like to look for a something uber specific, like latitude wed need to put 2 properies, since its latitude is nested
