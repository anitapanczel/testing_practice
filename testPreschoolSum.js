const test = require("./myTestLib");
const preSchoolSum = require("./preSchoolSum.js");

test(8, preSchoolSum(4, 4), "10 alatti egész eredménynél magát a számot kapjuk: ");
test(0, preSchoolSum(-4, -2), "0 alatti eredmény esetén 0-t kapunk: ");
test(3, preSchoolSum(1.2, 2.3), "Nem egész számok esetén lefelé kerekít: ");
test("sok", preSchoolSum(9, 2), "10 feletti eredmény esetén sok-at ad vissza: ");
test(10, preSchoolSum(6, 4), "10 esetén visszaadja a 10-et: ");




