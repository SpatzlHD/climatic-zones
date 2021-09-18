const express = require("express");
const path = require("path");
const app = express();
let klimaschlüsel;
app.set("view-engine", "ejs");
app.use(express.urlencoded());
app.use(express.static(__dirname + "/style.css"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/home.html"));
});
app.get("/klima", (req, res) => {
  res.sendFile(path.join(__dirname, "/klima.html"));
});
app.post("/klima", (req, res) => {
  //temperaturen
  var temperatureAnnual = parseFloatCheck(req.body.temperatureAnnual);

  var temperatureJanuary = parseFloatCheck(req.body.temperatureJanuary);
  var temperatureFebruary = parseFloatCheck(req.body.temperatureFebruary);
  var temperatureMarch = parseFloatCheck(req.body.temperatureMarch);
  var temperatureApril = parseFloatCheck(req.body.temperatureApril);
  var temperatureMay = parseFloatCheck(req.body.temperatureMay);
  var temperatureJune = parseFloatCheck(req.body.temperatureJune);
  var temperatureJuly = parseFloatCheck(req.body.temperatureJuly);
  var temperatureAugust = parseFloatCheck(req.body.temperatureAugust);
  var temperatureSeptember = parseFloatCheck(req.body.temperatureSeptember);
  var temperatureOctober = parseFloatCheck(req.body.temperatureOctober);
  var temperatureNovember = parseFloatCheck(req.body.temperatureNovember);
  var temperatureDecember = parseFloatCheck(req.body.temperatureDecember);

  //niederschlag
  var precipitationAnnual = parseFloatCheck(req.body.precipitationAnnual);
  var precipitationJanuary = parseFloatCheck(req.body.precipitationJanuary);
  var precipitationFebruary = parseFloatCheck(req.body.precipitationFebruary);
  var precipitationMarch = parseFloatCheck(req.body.precipitationMarch);
  var precipitationApril = parseFloatCheck(req.body.precipitationApril);
  var precipitationMay = parseFloatCheck(req.body.precipitationMay);
  var precipitationJune = parseFloatCheck(req.body.precipitationJune);
  var precipitationJuly = parseFloatCheck(req.body.precipitationJuly);
  var precipitationAugust = parseFloatCheck(req.body.precipitationAugust);
  var precipitationSeptember = parseFloatCheck(req.body.precipitationSeptember);
  var precipitationOctober = parseFloatCheck(req.body.precipitationOctober);
  var precipitationNovember = parseFloatCheck(req.body.precipitationNovember);
  var precipitationDecember = parseFloatCheck(req.body.precipitationDecember);

  if (isNaN(temperatureAnnual)) {
    return res.redirect("/error");
  } else if (isNaN(temperatureJanuary)) {
    return res.redirect("/error");
  } else if (isNaN(temperatureFebruary)) {
    return res.redirect("/error");
  } else if (isNaN(temperatureMarch)) {
    return res.redirect("/error");
  } else if (isNaN(temperatureApril)) {
    return res.redirect("/error");
  } else if (isNaN(temperatureMay)) {
    return res.redirect("/error");
  } else if (isNaN(temperatureJune)) {
    return res.redirect("/error");
  } else if (isNaN(temperatureJuly)) {
    return res.redirect("/error");
  } else if (isNaN(temperatureAugust)) {
    return res.redirect("/error");
  } else if (isNaN(temperatureSeptember)) {
    return res.redirect("/error");
  } else if (isNaN(temperatureOctober)) {
    return res.redirect("/error");
  } else if (isNaN(temperatureNovember)) {
    return res.redirect("/error");
  } else if (isNaN(temperatureDecember)) {
    return res.redirect("/error");
  } else if (isNaN(precipitationAnnual)) {
    return res.redirect("/error");
  } else if (isNaN(precipitationJanuary)) {
    return res.redirect("/error");
  } else if (isNaN(precipitationFebruary)) {
    return res.redirect("/error");
  } else if (isNaN(precipitationMarch)) {
    return res.redirect("/error");
  } else if (isNaN(precipitationApril)) {
    return res.redirect("/error");
  } else if (isNaN(precipitationMay)) {
    return res.redirect("/error");
  } else if (isNaN(precipitationJune)) {
    return res.redirect("/error");
  } else if (isNaN(precipitationJuly)) {
    return res.redirect("/error");
  } else if (isNaN(precipitationAugust)) {
    return res.redirect("/error");
  } else if (isNaN(precipitationSeptember)) {
    return res.redirect("/error");
  } else if (isNaN(precipitationOctober)) {
    return res.redirect("/error");
  } else if (isNaN(precipitationNovember)) {
    return res.redirect("/error");
  } else if (isNaN(precipitationDecember)) {
    return res.redirect("/error");
  }
  let k1;
  let k2;
  let k3;
  let humid = 0;

  //klimaschlüsel 1
  if (precipitationAnnual < 250) {
    k1 = "B";
  } else if (temperatureAnnual > 24) {
    k1 = "A";
  } else if (temperatureAnnual > 12) {
    k1 = "C";
  } else if (temperatureAnnual > 0) {
    k1 = "D";
  } else if (temperatureAnnual > -10) {
    k1 = "E";
  } else if (temperatureAnnual < -10) {
    k1 = "F";
  }

  //klimaschlüsel 2
  if (temperatureJanuary * 2 > precipitationJanuary) {
    humid = humid + 1;
  }

  if (temperatureFebruary * 2 > precipitationFebruary) {
    humid = humid + 1;
  }

  if (temperatureMarch * 2 > precipitationMarch) {
    humid = humid + 1;
  }
  if (temperatureApril * 2 > precipitationApril) {
    humid = humid + 1;
  }
  if (temperatureMay * 2 > precipitationMay) {
    humid = humid + 1;
  }
  if (temperatureJune * 2 > precipitationJune) {
    humid = humid + 1;
  }
  if (temperatureJuly * 2 > precipitationJuly) {
    humid = humid + 1;
  }
  if (temperatureAugust * 2 > precipitationAugust) {
    humid = humid + 1;
  }
  if (temperatureSeptember * 2 > precipitationSeptember) {
    humid = humid + 1;
  }
  if (temperatureOctober * 2 > precipitationOctober) {
    humid = humid + 1;
  }
  if (temperatureNovember * 2 > precipitationNovember) {
    humid = humid + 1;
  }
  if (temperatureDecember * 2 > precipitationDecember) {
    humid = humid + 1;
  }

  if (humid <= 2) {
    k2 = "a";
  } else if (humid <= 5) {
    k2 = "sa";
  } else if (humid <= 9) {
    k2 = "sh";
  } else if (humid <= 12) {
    k2 = "h";
  }
  //klimaschlüsel 3

  const MAX = Math.max(
    temperatureJanuary,
    temperatureFebruary,
    temperatureMarch,
    temperatureApril,
    temperatureMay,
    temperatureJune,
    temperatureJuly,
    temperatureAugust,
    temperatureSeptember,
    temperatureOctober,
    temperatureNovember,
    temperatureDecember
  );

  const MIN = Math.min(
    temperatureJanuary,
    temperatureFebruary,
    temperatureMarch,
    temperatureApril,
    temperatureMay,
    temperatureJune,
    temperatureJuly,
    temperatureAugust,
    temperatureSeptember,
    temperatureOctober,
    temperatureNovember,
    temperatureDecember
  );

  if (k1 === "A") {
    if (precipitationAnnual > 15) {
      k3 = "5";
    } else {
      k3 = "6";
    }
  } else if (MAX - MIN <= 10) {
    k3 = "1";
  } else if (MAX - MIN <= 20) {
    k3 = "2";
  } else if (MAX - MIN <= 40) {
    k3 = "3";
  } else if (MAX - MIN > 40) {
    k3 = "4";
  }
  klimaschlüsel = `${k1}${k2}${k3}`;
  console.log(klimaschlüsel);
  res.redirect("/result");
});
app.get("/result", (req, res) => {
  res.render("result.ejs", { k: klimaschlüsel });
});
app.get("/error", (req, res) => {
  res.sendFile(path.join(__dirname, "/error.html"));
});
app.listen(3000, 3001);

function parseFloatCheck(value) {
  var str = value;
  if (str.search(/,.+/)) str = str.replace(/,/g, ".");
  if (isNaN(str)) {
    return NaN;
  }
  return parseFloat(str);
}
