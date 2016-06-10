var skillSet = ["Front End", "Back End", "Logic"];

var randomizerSkills = skillSet[Math.floor(Math.random()*skillSet.length)]; // generates random index number

var generateSkillSet = function(){
  return randomizerSkills;
};

generateSkillSet();

module.exports=generateSkillSet;
