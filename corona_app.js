var unirest = require("unirest");

var req = unirest("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php");

req.headers({
	"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
	"x-rapidapi-key": "33f88020f1msh0e171ec8f15eae8p1f7d1djsnd1f70a244b0d"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});