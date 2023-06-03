// UDACITY JULIAJAMES QUIZ

// var x = 1;

while (x <=20) {

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
    console.log(num +  " bottles of juice on the wall! " + num + " bottles  of juice! Take one down, pass it around... " + (num-1) +  " bottle of juice on the wall!")
  } else if (num === 1) {
    console.log(num +  " bottle of juice on the wall! " + num + " bottle  of juice! Take one down, pass it around... " + (num-1) +  " bottles of juice on the wall!")
  } else {
    console.log(num +  " bottles of juice on the wall! " + num + " bottles  of juice! Take one down, pass it around... " + (num-1) +  " bottles of juice on the wall!")
  }
  num --; 
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
for (let amount of amounts ) {
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

function laugh(num); {
  for (let num = 1; num <=3; num++)
  console.log(num + "!")
}
console.log(laugh(3));

/*********************************************/

/* Build A Triangle (5-3) */ 

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */

// creates a line of * for a given length

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(x) {
  let triangle = "";
  for (t = 1; t <= x; t++) {
    triangle += makeLine(t);
  }
  return triangle;
}
// test your code by uncommenting the following line
console.log(buildTriangle(10));

/*** SOLUTION ***/
 
// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
    // Let's build a huge string equivalent to the triangle
    var triangle = "";
    
    //Let's start from the topmost line
    var lineNumber = 1;
    
    for(lineNumber=1; lineNumber<=length; lineNumber++){
        // We will not print one line at a time.
        // Rather, we will make a huge string that will comprise the whole triangle
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}

// test your code by uncommenting the following line
// Note that the function buildTriangle() must return a string 
// because the console.log() accepts a string argument
console.log(buildTriangle(10));


/* Function Expression Recap */
What you've learned so far:
Function Expression: When a function is assigned to a variable. The function can be named, or anonymous. Use the variable name to call a function defined in a function expression.

// anonymous function expression
var doSomething = function(y) {
  return y + 1;
};
// named function expression
var doSomething = function addOne(y) {
  return y + 1;
};
// for either of the definitions above, call the function like this:
doSomething(5);
Returns: 6

You can even pass a function into another function inline. This pattern is commonly used in JavaScript, and can be helpful streamlining your code.

// function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");


/*** Quiz: Laugh (5-4) ***/

/* SOLUTION */
let laugh = funtion(num) {
  let laughString = "";

  for (i = 0; i < num; i++) {
    laughString += "ha"
  }
  laughString += "!";
  return laughString;
}

console.log(laugh(10));  

/*** Quiz: Cry (5-5) ***/

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `cry`
 * - Your code should include a named function expression stored in the variable `cry`
 * - Your code should call the function expression using the variable name, not the function name
 * - Your function expression should return the expected output
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here

let cry = function makeCry(n) {
  let cryString = "boohoo!";
  return cryString
}

console.log(cry);

 * Programming Quiz: Inline Functions (5-6)
 */
 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 */


// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(num) {
    let laughString = "";
    
    for (i = 0; i < num; i++) {
        laughString += "ha";
    }
    laughString += "!";
    return laughString;
});

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression 


/*** Voting Station Calculation ***/

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function(stations) {
  let goodStations = [];
  for (const val of stations) {
    if (val[1] >= 20 && (val[2] === 'school' || val[2] === 'community centre')) {
      goodStations.push(val[0]);
    }
  }
  return goodStations
} 

/*** X Marks The Perfect Shot ***/
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

let x = 0;
let y = 0;

const finalPosition = function (moves) {
  let moveGrid = [x, y]; {

  }
  }
}


/*** Functions - Age Calculator ***/

function ageCalculator(name, yearOfBirth, currentYear); {
  let name = "";
  
}
