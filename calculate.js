const data = require("./data.json");

let k1;
let k2;
let k3;
let humid = 0;
if (data.tabel[0].annual_average.precipitation < 250) {
  k1 = "B";
} else if (data.tabel[0].annual_average.temperature > 24) {
  k1 = "A";
} else if (data.tabel[0].annual_average.temperature > 12) {
  k1 = "C";
} else if (data.tabel[0].annual_average.temperature > 0) {
  k1 = "D";
} else if (data.tabel[0].annual_average.temperature > -10) {
  k1 = "E";
} else if (data.tabel[0].annual_average.temperature < -10) {
  k1 = "F";
}
if (
  data.tabel[0].january.temperature * 2 >
  data.tabel[0].january.precipitation
) {
  humid = humid + 1;
}

if (data.tabel[0].March.temperature * 2 > data.tabel[0].March.precipitation) {
  humid = humid + 1;
}

if (
  data.tabel[0].February.temperature * 2 >
  data.tabel[0].February.precipitation
) {
  humid = humid + 1;
}
if (data.tabel[0].april.temperature * 2 > data.tabel[0].april.precipitation) {
  humid = humid + 1;
}
if (data.tabel[0].May.temperature * 2 > data.tabel[0].May.precipitation) {
  humid = humid + 1;
}
if (data.tabel[0].June.temperature * 2 > data.tabel[0].June.precipitation) {
  humid = humid + 1;
}
if (data.tabel[0].July.temperature * 2 > data.tabel[0].July.precipitation) {
  humid = humid + 1;
}
if (data.tabel[0].August.temperature * 2 > data.tabel[0].August.precipitation) {
  humid = humid + 1;
}
if (
  data.tabel[0].september.temperature * 2 >
  data.tabel[0].september.precipitation
) {
  humid = humid + 1;
}
if (
  data.tabel[0].October.temperature * 2 >
  data.tabel[0].October.precipitation
) {
  humid = humid + 1;
}
if (
  data.tabel[0].November.temperature * 2 >
  data.tabel[0].November.precipitation
) {
  humid = humid + 1;
}
if (
  data.tabel[0].November.temperature * 2 >
  data.tabel[0].November.precipitation
) {
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

const MAX = Math.max(
  data.tabel[0].january.temperature,
  data.tabel[0].February.temperature,
  data.tabel[0].March.temperature,
  data.tabel[0].april.temperature,
  data.tabel[0].May.temperature,
  data.tabel[0].June.temperature,
  data.tabel[0].July.temperature,
  data.tabel[0].August.temperature,
  data.tabel[0].september.temperature,
  data.tabel[0].October.temperature,
  data.tabel[0].November.temperature,
  data.tabel[0].December.temperature
);

const MIN = Math.min(
  data.tabel[0].january.temperature,
  data.tabel[0].February.temperature,
  data.tabel[0].March.temperature,
  data.tabel[0].april.temperature,
  data.tabel[0].May.temperature,
  data.tabel[0].June.temperature,
  data.tabel[0].July.temperature,
  data.tabel[0].August.temperature,
  data.tabel[0].september.temperature,
  data.tabel[0].October.temperature,
  data.tabel[0].November.temperature,
  data.tabel[0].December.temperature
);

if (k1 === "A") {
  if (data.tabel[0].annual_average.temperature > 23) {
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

console.log(`${k1}${k2}${k3}`);
