// current day & used dayjs
$(document).ready(function () {
    let NowMoment = dayjs().format("dddd, MMMM D, YYYY h:mm A");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = NowMoment;
    let currentHour = dayjs().hour();

    // TODO: Add code to apply the past, present, or future class

    $(".time-block").each(function () {
        var timeBlock = $(this).attr("id").split("-")[1];
    
        if (currentHour === timeBlock) {
            $(this).addClass("present");
            // $(this).children(".description").addClass("white-text");
          } else if (currentHour < timeBlock) {
            // $(this).removeClass("present");
            $(this).addClass("future");
          } else if (currentHour > timeBlock) {
            // $(this).removeClass("future");
            $(this).addClass("past");
          }
        });

        // TODO: Add a listener for click events on the save button
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id"); 
        
        localStorage.setItem(time,value);
    });
  
    //local storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
