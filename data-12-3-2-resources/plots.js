d3.json("samples.json").then(function(data){
    console.log(data);
});
//it doesnt work in safari -it only works in chrome
//remember to type in python -m http.server IN python eviornment 


//this will now filter out the null values within the freq. of belly washing
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});


//pulling the ata of a specifi person- 0= the first person on the list
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});