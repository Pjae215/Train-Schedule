
$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyC3t4RIETrwmLIzTrCGl_BltItY4K6s4Ng",
        authDomain: "classstuffpjae.firebaseapp.com",
        databaseURL: "https://classstuffpjae.firebaseio.com/"
    };
    firebase.initializeApp(config);

    
    // database var
    var database = firebase.database();

    // Variables for the onClick event
    var name;
    var destination;
    var firstTrain;
    var frequency = 0;

    