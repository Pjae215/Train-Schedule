
$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyC3t4RIETrwmLIzTrCGl_BltItY4K6s4Ng",
        authDomain: "classstuffpjae.firebaseapp.com",
        databaseURL: "https://classstuffpjae.firebaseio.com/"
                };
    firebase.initializeApp(config);
//need to revisit trainschedule database...this one is temporary
   
    // database var
    var database = firebase.database();

    // Variables for the onClick event
    var name;
    var destination;
    var firstTrain;
    var frequency = 0;
   
    $("#add-train").on("click", function() {
    event.preventDefault();

    //error in getting validation to submit to database
    //$("#form-group").checkValidity();
    
       
        // Storing and retreiving new train data
        name = $("#train-name").val().trim();
        destination = $("#destination").val().trim();
        firstTrain = $("#first-train").val().trim();
        frequency = $("#frequency").val().trim();


        // Pushing to database
        database.ref().push({
            name: name,
            destination: destination,
            firstTrain: firstTrain,
            frequency: frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
        
        $("form")[0].reset();
    });

    