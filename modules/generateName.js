var names = ["Beyonce", "LLCoolJ", "McBirdyPants", "Chancey", "LLBlueJay","Schmidt", "Angus", "Snoopy", "Captain FeatherBottom", "Princess CooCoo Poof"];

var randomizerNames = names[Math.floor(Math.random()*names.length)]; // generates random index number


var generateName = function(){
  return randomizerNames;
};//end generateName function

generateName();

module.exports=generateName;
