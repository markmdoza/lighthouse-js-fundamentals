// UDACITY JULIAJAMES QUIZ

// var x = 1;

while (x <= 20) {

  if (x % 3 === 0 && x % 5 === 0) {
    console.log("JuliaJames");
  } else if (x % 5 === 0) {
    console.log("James");
  } else if (x % 3 === 0) {
    console.log("Julia");
  } else {
    console.log(x);
  }
  x = x + 1;
}

/**** */

99 BOTTLES OF JUICE QUIZ

var num = 99;

while (num >= 1) {

  if (num === 2) {
    console.log(num + " bottles of juice on the wall! " + num + " bottles  of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!")
  } else if (num === 1) {
    console.log(num + " bottle of juice on the wall! " + num + " bottle  of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!")
  } else {
    console.log(num + " bottles of juice on the wall! " + num + " bottles  of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!")
  }
  num--;
}






/* T-60 seconds
T-59 seconds
T-58 seconds
...
T-51 seconds
Orbiter transfers from ground to internal power
T-49 seconds
...
T-3 seconds
T-2 seconds
T-1 seconds
Solid rocket booster ignition and liftoff!


Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)


/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here

var seconds = 60;

while (seconds >= 1) {
  if (seconds === 50) {
    console.log("Obiter transfers from ground to internal power");
  } else if (seconds === 31) {
    console.log("Ground lanuch sequencer is go for auto sequence start");
  } else if (seconds === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (seconds === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (seconds === 6) {
    console.log("Main engine start");
  } else if (seconds = 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  } else {
    console.log(seconds);
  }
  seconds = "T-" + seconds--;
}

var seconds = 60;

while (seconds >= 0) {
  if (seconds = 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (seconds === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (seconds === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (seconds === 10) {
    console.log("Activate main engine hydrogen burnoff system ");
  } else if (seconds === 6) {
    console.log("Main engine start");
  } else if (seconds === 0) {
    console.log("Solid rocket booster ignition and liftoff! ");
  } else {
    console.log("T-" + seconds + ' seconds');
  }
  seconds--;
}

/* const amounts = [61,00, 52.25, 112.99, 5.00];

let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}

console.log('Order total is: ', total);

/* Newer for..of Loop*/

let total = 0;
for (let amount of amounts) {
  total += amount;
}

console.log('Order total is ', total);


/* FUNCTIONS */

function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}

var avg = findAverage(5, 9);

/* Laugh it Off Quiz */

function laugh() {
  return "hahahahahahahahahaha!";
}

console.log(laugh());

/* Laugh It Off Quiz 2 */

let laugh = function (num) {
  let laughString = '';

  for (i = 0; 1 < num; i++) {
    laughString += "ha";
  }

  laughString += '!';
  return laughString;
}

console.log(laugh(3));

/* Following is the syntax of splice() method: arrayName.splice(arg1, arg2, item1, ....., itemX); where,

arg1 = Mandatory argument. Specifies the starting index position to add/remove items. You can use a negative value to specify the position from the end of the array e.g., -1 specifies the last element.

arg2 = Optional argument. Specifies the count of elements to be removed. If set to 0, no items will be removed.

item1, ....., itemX are the items to be added at index position arg1

splice() method returns the item(s) that were removed. */

Arrays have a set of special methods to help you iterate over and perform operations on collections of data.You can view the MDN Documentation list of Array methods here, but a couple big ones to know are the forEach() and map() methods.

The forEach() method gives you an alternative way to iterate over an array, and manipulate each element in the array with an inline function expression.

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});
Prints:
JELLY DONUT HOLE
CHOCOLATE DONUT HOLE
GLAZED DONUT HOLE