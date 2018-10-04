// Initialize Firebase
var config = {
    apiKey: "AIzaSyBxWllofkCDGCcqO0XRmccGUVejL0M6vTs",
    authDomain: "workout-tracker-454ba.firebaseapp.com",
    databaseURL: "https://workout-tracker-454ba.firebaseio.com",
    projectId: "workout-tracker-454ba",
    storageBucket: "workout-tracker-454ba.appspot.com",
    messagingSenderId: "1072910033041"
};
firebase.initializeApp(config);
database = firebase.database();

var bench = 0;
var squat = 0;
var dead = 0;
var ohp = 0;
var row = 0;


$(document).on("click", ".btn", function (event) {
    event.preventDefault();
    bench = $("#bench-input").val().trim();
    squat = $("#squat-input").val().trim();
    dead = $("#deadlift-input").val().trim();
    ohp = $("#ohp-input").val().trim();
    row = $("#rows-input").val().trim();

    database.ref().set({
        bench: bench,
        squat: squat,
        dead: dead,
        ohp: ohp,
        row: row
    });
});

//wk-a day 1
$(document).on("click", "#a-1", function(event){
    event.preventDefault();
    $("#ex-1").text("Bench Press");
    $("#ex-2").text("Squat");
    $("#ex-3").text("Overhead Press");
    $("#ex-4").text("chinups");
    $("#rep-1").text("4x4");
    $("#rep-2").text("4x8");
    $("#rep-3").text("4x8");
    $("#rep-4").text("4x8");

});

//wk-a day 2
$(document).on("click", "#a-2", function(event){
    event.preventDefault();
    $("#ex-1").text("Bench Press");
    $("#ex-2").text("Deadlift");
    $("#ex-3").text("Overhead Press");
    $("#ex-4").text("Rows");
    $("#rep-1").text("4x8");
    $("#rep-2").text("4x4");
    $("#rep-3").text("4x4");
    $("#rep-4").text("4x8");

});

//wk-a day 3
$(document).on("click", "#a-3", function(event){
    event.preventDefault();
    $("#ex-1").text("Bench Press");
    $("#ex-2").text("Squat");
    $("#ex-3").text("Overhead Press");
    $("#ex-4").text("chinups");
    $("#rep-1").text("3x4 + 1xAMRAP");
    $("#rep-2").text("3x4 + 1xAMRAP");
    $("#rep-3").text("4x8");
    $("#rep-4").text("4x4");

});

//wk-b day 1
$(document).on("click", "#b-1", function(event){
    event.preventDefault();
    $("#ex-1").text("Bench Press");
    $("#ex-2").text("Deadlift");
    $("#ex-3").text("Overhead Press");
    $("#ex-4").text("Rows");
    $("#rep-1").text("4x8");
    $("#rep-2").text("4x8");
    $("#rep-3").text("4x4");
    $("#rep-4").text("4x4");

});

//wk-b day 2
$(document).on("click", "#b-2", function(event){
    event.preventDefault();
    $("#ex-1").text("Bench Press");
    $("#ex-2").text("Squat");
    $("#ex-3").text("Overhead Press");
    $("#ex-4").text("Chinups");
    $("#rep-1").text("4x4");
    $("#rep-2").text("4x8");
    $("#rep-3").text("4x8");
    $("#rep-4").text("4x8");
});

//wk-b day 3
$(document).on("click", "#b-3", function(event){
    event.preventDefault();
    $("#ex-1").text("Bench Press");
    $("#ex-2").text("Deadlift");
    $("#ex-3").text("Overhead Press");
    $("#ex-4").text("Rows");
    $("#rep-1").text("4x8");
    $("#rep-2").text("3x4 + 1xAMRAP");
    $("#rep-3").text("3x4 + 1xAMRAP");
    $("#rep-4").text("4x8");
});