// var employeeData;

$(document).ready(function() {
     $.ajax({
       url: 'http://localhost:3000/pathGet',
       type: "GET",
       dataType: 'text',
       success: function( response ){
         $('#createProject').click(function(){
          // console.log( 'in createProject success' );
          // console.log( response );
          $('#clickProjectButton').append(companyInfo);
          $('#clickProjectButton').append('<button id="assignStaff">Assign Staff</button>');

          $('#assignStaff').click(function() {
            $('.employeeData').append( response );
          });
          // employeeData = data;
        }); // end click function
        }, // end success function
       statusCode: {
          404: function(){
             alert( 'error connecting to server' );
          } // end 404
         } // end statusCode
       }); // end ajax request
});//end document ready
//creates random values for three requitment areas of project
var projectPoints= "Front End Points: " + randomPoints(10, 60) + " Back End Points: " + randomPoints(10, 60) + " Logic Points: " + randomPoints(10, 60);
//generates random point values
function randomPoints(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
}
//array of potential companies
var names= ["petSmart", "Target", "General Mills", "Kemps", "Disney", "Banana Mush Records", "Wet Bird Incorporated"];
//picks a random company
var companyName = names[Math.floor(Math.random()*names.length)];
// display for the company name and requirements
var companyInfo = "Company: " + companyName+" Project Requirements:  " + projectPoints;

console.log(companyInfo);
