// business logic


//creates our constructor
function Player(name) {
  this.name = name;
  this.roll = 0;
  this.tempScore = 0;
  this.permScore = 0;
  // console.log(player1);
}


//-------------------------------------

// var notYourTurn = function() {
//   if ("#btnHold1") {
//     .player1.hide();
//   }
//   )
// }

Player.prototype.playerRoll = function(roll) { //call function - working
  console.log(this.roll);
  if(this.roll === 1) {
    this.tempScore = 0;
  } else {
    this.tempScore += this.roll;
    return;

  }
}
  //   // switch to other player




  // }


Player.prototype.hold = function() {
  return this.permScore += this.tempScore;
  // switch to other player
};

// creates random roll 1-6
var rollDice = function() {
  return Math.floor((Math.random() * 6) + 1);

}

// user interface logic
$(document).ready(function() {
  var player1 = new Player(1);
  var player2 = new Player(2);

  $("#roll1").submit(function(event) {
    event.preventDefault();
    player1.roll = rollDice(); //calls rollDice function
    $("#rolledDice1").text(player1.roll); //shows current roll val - working
    player1.playerRoll();
    $("#tempTotal1").text(player1.tempScore);
  });

  // $("#hold1").submit(function(event) {
  //   event.preventDefault();
  //   var score = player1.hold();
  //   // console.log("score=" + score);
  //   $("#permTotal1").text(this.permScore);
  //   this.tempScore = 0; //shows the total score
  // });
});
