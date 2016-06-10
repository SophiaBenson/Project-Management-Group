var genName = require('./generateName');
var genSkillSet = require('./generateSkillSet');
var genScrumPoints = require('./genScrumPoints');
var generateEmployee = function(){
  var outputText = "<h3>Person Name: </h3>" + genName() + "<br><h4>Skill Set: </h4>" + genSkillSet() + "<br><h4>Scrum Points: </h4>" + genScrumPoints();
  return outputText;
};
generateEmployee();
module.exports=generateEmployee;
