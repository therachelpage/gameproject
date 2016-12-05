var t1score = 0;
var t2score = 0;
var currentteam = 1;

var boomSound = document.getElementById("boom");


var $button1 = $('.team1button')
var $button2 = $('.team2button')
var $team1scoreboard = $('.t1scoreboard')
var $team2scoreboard = $('.t2scoreboard')
var $team1MadLib = $('.team1madlib')
var $team2MadLib = $('.team2madlib')
var $team1winner = $('.team1displaywinner')
var $team2winner = $('.team2displaywinner')

  //Team questions

function runMadLib(madLib){
  console.log("Running mad lib.")
  var noun = prompt('Choose a noun.');
  var adjective = prompt('Choose an adjective.');
  var verb = prompt('Choose a verb.');
  var noun2 = prompt('Choose another noun.');
  var cityorcountry = prompt('Choose a city or country.');
  var verb2 = prompt('Choose another verb.');
  var bodypart = prompt('Choose a body part.');
  var animal = prompt('Choose an animal.');

  //The code for the madlib

  madLib.append('You wake up one day in Hollywood wearing nothing but a ');
  madLib.append(noun)
  madLib.append('.');
  madLib.append(' You notice that everyone around you is very ');
  madLib.append(adjective);
  madLib.append('.');
  madLib.append(' Suddenly you decide you are going to begin ');
  madLib.append(verb);
  madLib.append('ing.');
  madLib.append(' The first thing you spot is a giant ');
  madLib.append(noun2);
  madLib.append(' in the corner of the room. "How in the world did you get here?" the ');
  madLib.append(noun2);
  madLib.append(' asks. "I thought you lived in ');
  madLib.append(cityorcountry);
  madLib.append('." "I left ');
  madLib.append(cityorcountry);
  madLib.append(' because the authorities wanted to ');
  madLib.append(verb2);
  madLib.append(' my ');
  madLib.append(bodypart);
  madLib.append('," you reply. "Now I live out here studying the ways of the ancient  ');
  madLib.append(animal);
  madLib.append( 's."');


  //If the madlib is finished on the 1st team then stop the game. Then run the madlib for the second team under the second div.

  if (currentteam == 1) {
    currentteam = 2
    setTimeout(function() {
      runMadLib($team2MadLib)
    }, 3000)
  } else {
    // announce winner
  }
}


runMadLib($team1MadLib)

$button1.click(function() {
  t1score = t1score + 1;
  displayWinner()
  console.log("This is team 1's score." + t1score);
  $team1scoreboard.text(t1score)
  boomSound.play()
});

$button2.click(function() {
  t2score = t2score + 1;
  displayWinner()
  console.log("This is team 2's score." + t2score);
  $team2scoreboard.text(t2score) //<------------
  boomSound.play()
});


//This is the text that displays a message saying which team has won.//


function displayWinner(){
  if (t1score > 4) {
    console.log("Team 1 is the winner!");
    $team1winner.text("......Team 1 is the ultimate Madlib Wars champion!");
    $team1winner.addClass('animated headShake tada infinite')
    // animation plays
  }

  if (t2score > 4) {
    console.log("Team 2 is the winner!");
    $team2winner.text("......Team 2 is the ultimate Madlib Wars champion!");
    $team2winner.addClass('animated headShake tada infinite')
      // animation plays
  }}



//Animate text of $team1winner.text if t1score > 5.
//Animate text of $team2winner.text if t2score > 2.
