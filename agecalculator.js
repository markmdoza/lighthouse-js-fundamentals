
function ageCalculator(name, yearOfBirth, currentYear) {
  currentAge = currentYear - yearOfBirth;
  return (name + ' is ' + currentAge + ' years old.');
}

console.log(ageCalculator('Suzie', 1983, 2015));