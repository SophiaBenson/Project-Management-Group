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
        $('#clickProjectButton').empty(companyInfo);
          $('#clickProjectButton').append(companyInfo);
          $('#clickProjectButton').append('<br><button id="assignStaff">Assign Staff</button>');


          $('#assignStaff').click(function() {
            $('.employeeData').empty( response );
            $('.employeeData').append( response );
            $('#remove').click(function () {
              ('#clickProjectButton').remove();
            });
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
var projectPoints= "<br> Front End Points: " + randomPoints(10, 60) + "<br> Back End Points: " + randomPoints(10, 60) + "<br> Logic Points: " + randomPoints(10, 60);
//generates random point values
function randomPoints(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
}
//array of potential companies
var names= ["Corgi Cuddlers", "More Seeds Less Bedtime Unlimited", "Cranky Bird Co.", "Kemps", "Disney", "Banana Mush Records", "Wet Bird Incorporated", "Feed Aesop Nonprofit", "Bird Seed Unlimited"];
//picks a random company
var companyName = names[Math.floor(Math.random()*names.length)];
// display for the company name and requirements
var companyInfo = "<h2>Company: </h2>" + companyName+ "<br> <h3>Project Requirements: </h3> " + projectPoints;

console.log(companyInfo);
