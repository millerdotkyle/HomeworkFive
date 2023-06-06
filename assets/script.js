// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // var parentID = $(this).parent().attr("id");



  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // var cTime = dayjs().format("H");
  // console.log(typeof(cTime));
  // $(".time-block").each(function () {
  //   var parentID = $(this).parent().attr("id");
  //   if(parentID.diff(currentHour) == 0) {
  //     $(this).addClass("present");
  //   }
  // })


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this
  // var timeBlocks = $(".time-block");
  // console.log(timeBlocks);

});

// Starter code. 

$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    // get nearby values
    console.log($(this).parent().attr("id"));
    var selectedBtnParentID = $(this).parent().attr("id");
    var savedTXT = $(selectedBtnParentID).children("textarea");
    console.log(savedTXT);
    localStorage.setItem(selectedBtnParentID, savedTXT);
  });



  function hourUpdater() {
    var currentHour = dayjs().hour();
    console.log(currentHour);
    // loop over time blocks
    $('.time-block').each(function () {
      var parentID = $(this).attr("id");
      console.log(parentID);
      var parentHr = parentID.slice(5,7);
      // console.log(timeVar);
      // var parentHr = dayjs().hour(timeVar);
      console.log(parentHr);
      console.log(currentHour);


      if(currentHour == parentHr) {
        $(this).children("textarea").addClass("present");
    } else if (currentHour > parentHr) {
      $(this).children("textarea").addClass("past");
    }else if (currentHour < parentHr){
      $(this).children("textarea").addClass("future");
    }});
  }


  hourUpdater();
  setInterval(hourUpdater, 15000);
  // load any saved data from localStorage
  $('#hour-09 .description').val(localStorage.getItem('hour-09'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // display current day on page
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

});









//  var plans = JSON.parse(localStorage.getItem("storedPlans")) || [];
// if(plans.length === 0)
// plans = [
// {
//   hour: "09",
//   plan: ""
// },
// {
// hour: "10",
// plan: ""
// },
// {
//   hour: "11",
//   plan: ""
// },
// {
//   hour: "12",
//   plan: ""
// },
// {
//   hour: "13",
//   plan: ""
// },
// {
//   hour: "14",
//   plan: ""
// },
// {
//   hour: "15",
//   plan: ""
// },
// {
//   hour: "16",
//   plan: ""
// },
// {
//   hour: "17",
//   plan: ""
// }
// ];
// console.log(plans);