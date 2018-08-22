// business logic

// function Scores(rollScore, tempScore, permScore) {
//   this.rollScore = parseInt(rollScore);
//   this.tempScore = parseInt(tempScore);
//   this.permScore = parseInt(permScore);
// }


var diceRolls = []; //array for roll vals
var rollSum = 0; //starts roll count at 0
var addition = (accumulator, currentValue) => accumulator + currentValue; //equation to add all integers in an array
var permTotal = 0; //starts roll count at 0
var holdTotal = []; //array for hold button to add to
var rollTotal; //creates an empty variable globally for use locally
var roll1;

// creates random roll 1-6
var rollDice = function() {
  var roll = Math.floor((Math.random() * 6) + 1);
//   return roll;
// }
  if (roll === 1) {
    clear();
    return 1;
    // move to next player
  } else {
    return roll;
  }
};

var clear = function() {
  // rollForm.reset();
  // document.getElementById("rollForm").reset();

  // console.log('clear called');
  // var tempTotal = "nill";
  // var rollTotal = "nill";
};

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

    var winTerms = function(win) {
      if (permTotal >= 100) { //add in Player2 later
        // $("#win").show();
        $("#win").show();
    }
  };
});
  // $("#win").show();
  // var winStatus = function($("#win").show());
