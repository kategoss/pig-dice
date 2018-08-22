// business logic
var rollDice = function(rolling) {
  return Math.floor((Math.random() * 6) + 1);
}

// user interface logic
$(document).ready(function() {
  $("#player1").submit(function(event) {
    event.preventDefault();
    var roll1 = rollDice();
    console.log(roll1);
  });
});
