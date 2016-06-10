var scrumPoints = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var randomizerPoints = scrumPoints[Math.floor(Math.random()*scrumPoints.length)]; // generates random index number

var generateScrumPoints = function(){
  return randomizerPoints;
};

generateScrumPoints();

module.exports=generateScrumPoints;
