// business logic
var diceRolls = []; //array for roll vals
var rollSum = 0; //starts roll count at 0
var reducer = (accumulator, currentValue) => accumulator + currentValue;

// creates random roll 1-6
var rollDice = function(rolling) {
  return Math.floor((Math.random() * 6) + 1);
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
    // console.log(diceRolls);
  });

  $("#roll1").submit(function(event) {
    event.preventDefault();
    var roll1 = rollDice();  //calls rollDice function
    $("#rolledDice1").text(roll1); //shows current roll val
    diceRolls.push(roll1); // adds row value to array
    // console.log(diceRolls);
    var rollTotal = diceRolls.reduce(reducer);
    console.log(rollTotal);
    $("#tempTotal1").text(rollTotal);
  });

});
