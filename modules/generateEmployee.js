var genName = require('./generateName');
var genSkillSet = require('./generateSkillSet');
var genScrumPoints = require('./genScrumPoints');
var generateEmployee = function(){
  var outputText = "Person Name: " + genName() + "\nSkill Set: " + genSkillSet() + "\nScrum Points: " + genScrumPoints();
  return outputText;
};
generateEmployee();
module.exports=generateEmployee;
