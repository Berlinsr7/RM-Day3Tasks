var countries = new XMLHttpRequest();

countries.open("GET", "https://restcountries.com/v3.1/all");
countries.send();

countries.onload = function()
{
    var result = JSON.parse(countries.response);
    for(var i in result)
    {
        var flag = result[i].flags.png;
        console.log("Flag link", flag);
    }
}