// ✅ Destination Selection
$(document).on("click", ".select-destination", function () {
  let destination = $(this).data("destination");
  $("#selectedDestination").text("Selected Destination: " + destination);
});

// ✅ Accommodation, Transport & Activities cost calculation
function calculateBudget() {
  let hotelCost = parseInt($("#hotel").val()) || 0;
  let transportCost = parseInt($("#transport").val()) || 0;

  let activitiesCost = 0;
  $(".activity:checked").each(function () {
    activitiesCost += parseInt($(this).val());
  });

  let total = hotelCost + transportCost + activitiesCost;
  $("#totalBudget").text("Total Estimated Cost: ₹" + total);
}

$("#hotel, #transport, .activity").on("change", calculateBudget);

// ✅ Add itinerary items
$("#addItinerary").click(function () {
  let activity = $("#itineraryActivity").val();
  let date = $("#itineraryDate").val();
  let time = $("#itineraryTime").val();

  if (activity && date && time) {
    let listItem =
      "<li class='list-group-item'>" +
      activity +
      " on " +
      date +
      " at " +
      time +
      "</li>";
    $("#itineraryList").append(listItem);

    // clear fields after adding
    $("#itineraryActivity").val("");
    $("#itineraryDate").val("");
    $("#itineraryTime").val("");
  } else {
    alert("Please enter activity, date, and time!");
  }
});

// ✅ Destination Filtering
$(".filter-btn").click(function () {
  let filter = $(this).data("filter");

  if (filter === "all") {
    $(".destination-card").show();
  } else {
    $(".destination-card").hide();
    $('.destination-card[data-category="' + filter + '"]').show();
  }
});
// Destination select buttons
$(document).ready(function() {
  $(".select-destination").click(function() {
    var destination = $(this).data("destination"); // get clicked destination
    $("#selectedDestination").text("Selected Destination: " + destination);

    // Optional: scroll to Trip Planner section smoothly
    $('html, body').animate({
        scrollTop: $("#trip-planner").offset().top
    }, 600);
  });

  // Filtering buttons (if you already have)
  $(".filter-btn").click(function() {
    var filter = $(this).data("filter");
    if(filter === "all"){
      $(".destination-card").show();
    } else {
      $(".destination-card").hide();
      $('.destination-card[data-category="'+filter+'"]').show();
    }
  });
});
