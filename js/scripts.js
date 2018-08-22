// business logic
var diceRolls = []; //array for roll vals
var rollSum = 0; //starts roll count at 0
var addition = (accumulator, currentValue) => accumulator + currentValue;
var permTotal = 0;
var holdTotal = [];
var rollTotal;

// creates random roll 1-6
var rollDice = function(rolling) {
  return Math.floor((Math.random() * 6) + 1);
}

var totalAccumulation = function(math) {
  return rollTotal + permTotal;
}

// var addRolls = function() {
//   rollDice + rollDice
    // return rollSum += diceRolls[i];
    // rollSum += item;
    // tempTotal1.innerHTML = rollSum;
//   }
// }

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
    console.log(diceRolls);
    rollTotal = diceRolls.reduce(addition);
    $("#tempTotal1").text(rollTotal);
  });


  $("#hold1").submit(function(event) {
    event.preventDefault();
    var hold1 = totalAccumulation();  //calls rollDice function
    holdTotal.push(hold1); // adds roll value total to array
    var permTotal = holdTotal.reduce(addition);
    $("#permTotal1").text(permTotal);
  });
});
