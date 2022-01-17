const preSchoolSum = require('./preSchoolSum.js');

test('10 alatti egész eredménynél magát a számot kapjuk: ', () => {
  expect(preSchoolSum(4, 4)).toBe(8);
});
test('0 alatti eredménynél 0: ', () => {
  expect(preSchoolSum(-4, -2)).toBe(0);
});