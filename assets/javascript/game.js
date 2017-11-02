var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'r', 'p', 's'];

var wins = 0;
var losses = 0;
var guessCount = 9;
var guessTally = [];
var setCompPick = "";
// Capturing user guess
document.onkeyup = function(event) {
    var userPick = String.fromCharCode(event.keyCode).toLowerCase();


    if (guessCount == 9) {
        var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        setCompPick = computerPick;
    }

    var userCheck = guessTally.indexOf(userPick);
    if (userCheck < 0) {

        // Compares userPick to computerPick
        if (userPick == setCompPick) {
            // if true, wins increase, game resets
            wins++;
            guessCount = 9;
            guessTally = [];
        }
        else {
            // add user pick to user array guessTally and reduces the guessCount
            guessTally.push(userPick);
            guessCount--;
        }

    }
    //  if guessCount = 0, add as a loss, and reset game
    if (guessCount == 0) {
        losses++;
        guessCount = 9;
        guessTally = [];
    }

    // Taking the numbers and displaying them in HTML
    var html = "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " +
        wins +
        "</p>" +
        "<p>Losses: " +
        losses +
        "</p>" +
        "<p>Guesses Left: " +
        guessCount +
        "</p>" +
        "<p>Your Guesses so far: " +
        guessTally +
        "</p>";

    document.querySelector('#game').innerHTML = html;
}
