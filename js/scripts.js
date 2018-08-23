// business logic


//creates our constructor
function Player(name, roll, temp, perm) {
  this.name = name;
  this.roll = roll;
  this.tempScore = temp;
  this.permScore = perm;
  // console.log(player1);
}


//-------------------------------------

// var notYourTurn = function() {
//   if ("#btnHold1") {
//     .player1.hide();
//   }
//   )
// }

Player.prototype.playerRoll = function() {
  if (this.roll === 1) {
    this.tempScore = 0;
    // switch to other player
  } else {
    return this.tempScore += this.roll;
  }
}

Player.prototype.hold = function() {
  return this.permScore += this.tempScore;
  // switch to other player
};

// creates random roll 1-6
var rollDice = function() {
  return Math.floor((Math.random() * 6) + 1);
  // console.log(rollDice);
}

// user interface logic
$(document).ready(function() {
  var player1 = new Player(1, 0, 0, 0);
  var player2 = new Player(2);

  $("#roll1").submit(function(event) {
    event.preventDefault();
    this.roll = rollDice(); //calls rollDice function
    $("#rolledDice1").text(this.roll); //shows current roll val
    player1.playerRoll();
    $("#tempTotal1").text(this.tempScore);
  });

  $("#hold1").submit(function(event) {
    event.preventDefault();
    var score = player1.hold();
    console.log("score=" + score);
    $("#permTotal1").text(this.permScore);
    this.tempScore = 0; //shows the total score
  });
});
