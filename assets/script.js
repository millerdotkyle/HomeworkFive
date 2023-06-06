 $(document).ready(function () {
  $('.saveBtn').on('click', function () {
    // saved clicked btn parent id
    console.log($(this).parent().attr("id"));
    var selectedBtnParentID = $(this).parent().attr("id");
    var savedTXT = $(this).parent().children("textarea").text();
    console.log(savedTXT);
    localStorage.setItem(selectedBtnParentID, savedTXT);
  });



  function hourUpdater() {
    var currentHour = dayjs().hour();
    console.log(currentHour);
    // jquery loop over time blocks
    $('.time-block').each(function () {
      var parentID = $(this).attr("id");
      // console.log(parentID);
      //last 2 characters of id become the hour used to compare
      var parentHr = parentID.slice(5,7);
      // console.log(timeVar);
      // console.log(parentHr);
      // console.log(currentHour);

// evaluate time from dayjs vs value of the hour from the parent id
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