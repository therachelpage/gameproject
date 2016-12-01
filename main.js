var t1score = 0;
var t2score = 0;

var noun = prompt('Choose a noun.');
var adjective = prompt('Choose an adjective.');
var verb = prompt('Choose a verb.');
var noun2 = prompt('Choose another noun.');
var cityorcountry = prompt('Choose a city or country.');
var verb2 = prompt('Choose another verb.');
var bodypart = prompt('Choose a body part');
var animal = prompt('Choose an animal.');

document.write('You wake up one day in Hollywood wearing nothing but a ');
document.write(noun)
document.write('.');
document.write(' You notice that everyone around you is very ');
document.write(adjective);
document.write('.');
document.write(' Suddenly you decide you are going to begin ');
document.write(verb);
document.write('ing.');
document.write(' The first thing you spot is a giant ');
document.write(noun2);
document.write(' in the corner of the room. "How in the world did you get here?" the ');
document.write(noun2);
document.write(' asks. "I thought you lived in ');
document.write(cityorcountry);
document.write('." "I left ');
document.write(cityorcountry);
document.write(' because the authorities wanted to ');
document.write(verb2);
document.write(' on my ');
document.write(bodypart);
document.write('," you reply. "Now I live out here studying the ways of the ancient  ');
document.write(animal);
document.write( 's."');


var $button1 = $('.team1button')
var $button2 = $('.team2button')
$button1.click(function() {
  t1score = t1score + 1;
  console.log("This is team 1's score." + t1score);
  $team1scoreboard.text(t1score)
});
$button2.click(function() {
  t2score = t2score + 1;
  console.log("This is team 2's score." + t2score);
  $team2scoreboard.text(t2score)
});
var $team1scoreboard = $('.t1scoreboard')
var $team2scoreboard = $('.t2scoreboard')

//$( "#target" ).click(function() {
//  alert( "Handler for .click() called." );
//});
