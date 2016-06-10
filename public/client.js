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
          $('.clickProjectButton').append('<button id="assignStaff">Assign Staff</button>');
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
