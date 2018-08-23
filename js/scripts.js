// business logic

//creates our constructor
function Player(name, roll, temp, perm) {
  this.name = name;
  this.roll = 0;
  this.tempScore = 0;
  this.permScore = 0;
}

// creates random roll 1-6
var rollDice = function() {
  return Math.floor((Math.random() * 6) + 1);
};

//-------------------------------------


var diceRolls = []; //array for roll vals
var rollSum = 0; //starts roll count at 0
var addition = (accumulator, currentValue) => accumulator + currentValue; //equation to add all integers in an array
var permTotal = 0; //starts roll count at 0
var holdTotal = []; //array for hold button to add to
var rollTotal; //creates an empty variable globally for use locally
var roll1;
var clear;




// takes the current turns roll total and adds it to the perm total when the hold button is used.
var totalAccumulation = function(math) {
  return rollTotal + permTotal;
}



// user interface logic
$(document).ready(function() {


  $("#play1").submit(function(event) {
    event.preventDefault();
    var roll1 = rollDice();  //calls rollDice function
    $("#rolledDice1").text(roll1); //shows current roll val
    diceRolls.push(roll1); // adds row value to array
    $("#playbutton").addClass("hidden"); //hides play button after first click
  });

  $("#roll1").submit(function(event) {
    event.preventDefault();
    var roll1 = rollDice();  //calls rollDice function
    $("#rolledDice1").text(roll1); //shows current roll val
    diceRolls.push(roll1); // adds roll value to array
    rollTotal = diceRolls.reduce(addition); //adds all rolls in the array
    $("#tempTotal1").text(rollTotal); //shows the rolls total
  });

  $("#hold1").submit(function(event) {
    event.preventDefault();
    var hold1 = totalAccumulation();  //calls rollDice function
    holdTotal.push(hold1); // adds roll value total to array
    var permTotal = holdTotal.reduce(addition); //adds all totals from the holds in the array
    $("#permTotal1").text(permTotal); //shows the total score
    $("#tempTotal1").empty();
    $("#rolledDice1").empty();
  });



});
