// business logic

//creates our constructor
function Player(name) {
  this.name = name;
  this.roll = 0;
  this.tempScore = 0;
  this.permScore = 0;
  // console.log(player1);
}

// creates random roll 1-6 WORKS
var rollDice = function() {
  return Math.floor((Math.random() * 6) + 1);
}

//hides the play area of the player whos turn it isn't
function endofTurn() {
  $(".playerArea").toggle(2000);
    if(this.tempScore === 0) {
      // this.roll = 0;
      // return;
    }
}

Player.prototype.playerRoll = function(roll) { //call function - WORKS
  if(this.roll === 1) {
    this.tempScore = 0;
    endofTurn();
  } else {
    this.tempScore += this.roll;
    return;
  }
}

Player.prototype.hold = function() { //WORKS
  return this.permScore += this.tempScore;
  // switch to other player
};

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

  $("#hold1").submit(function(event) {
    event.preventDefault();
    player1.hold();
    $("#permTotal1").text(player1.permScore);
    player1.tempScore = 0; //shows the total score
    endofTurn();
    wintheGame();
  });

  $("#roll2").submit(function(event) {
    event.preventDefault();
    player2.roll = rollDice(); //calls rollDice function
    $("#rolledDice2").text(player2.roll); //shows current roll val - working
    player2.playerRoll();
    $("#tempTotal2").text(player2.tempScore);
  });

  $("#hold2").submit(function(event) {
    event.preventDefault();
    player2.hold();
    $("#permTotal2").text(player2.permScore);
    player2.tempScore = 0; //shows the total score
    endofTurn();
    wintheGame();
  });

  function wintheGame() {
    if (player1.permScore >= 100 || player2.permScore >= 100) {
    $("#win").show();
    }
  }
});
