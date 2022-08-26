

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var gameStatus = gamePattern.length;



$("*").on("keydown", start);
function start (){

if (gameStatus === 0){

  nextSequence();
  gameStatus = 1;
}
}


$(".btn").click(function(evt){

var userColour = $(this).attr("id");
userPattern.push(userColour);
animatePress(userColour);
playSound(userColour);

checkAnswer(userPattern.length - 1)
});



function checkAnswer(currentLevel){
if (userPattern[currentLevel] === gamePattern[currentLevel]){
  console.log("success");
  if (userPattern.length === gamePattern.length){

    setTimeout(function(){
      nextSequence();
    }, 1000);
  }
} else {
  console.log("wrong!")
  $("h1").text("Game Over, Press Any Key to Restart");
  gamePattern = [];
  userPattern = [];
  gameStatus = 0;
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");}, 200);
    var soundR = new Audio("sounds/wrong.mp3");
    soundR.play();

    $("*").on("keydown", start);
    function start (){

    if (gameStatus === 0){
    setTimeout(function(){
    nextSequence();
    gameStatus = 1;
}, 2000);

    }
    }

}
}





function nextSequence(){
  userPattern = [];
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  var level = gamePattern.length;
$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
$("h1").text("level " + level);
playSound(randomChosenColour);

}


function playSound(name){

  var sound = new Audio("sounds/"+name+".mp3");
  sound.play();
}


function animatePress(currentColour){
$("#"+currentColour).addClass("pressed");
setTimeout(function(){
  $("#"+currentColour).removeClass("pressed");
 }, 100);
}
