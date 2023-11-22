var countries = new XMLHttpRequest();

countries.open("GET", "https://restcountries.com/v3.1/all");
countries.send();

countries.onload = function()
{
    var result = JSON.parse(countries.response);
    for(var i in result)
    {
        var name = result[i].name.common;
        var region = result[i].region;
        var subRegion = result[i].subregion;
        var population = result[i].population;
        console.log("Country ", i);
        console.log("Name : ", name);
        console.log("Region : ", region);
        console.log("Sub-Region : ", subRegion);
        console.log("Population : ", population);
        console.log("------------------------------------------")
    }
}