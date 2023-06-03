
function ageCalculator(name, yearOfBirth, currentYear) {
  let currentAge = currentYear - yearOfBirth;
  return (name + ' is ' + currentAge + ' years old.');
}

console.log(ageCalculator('Suzie', 1983, 2015));