// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devoured-btn").on("click", function () {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function () {
    
      // Reload the page to get the updated list
      location.reload();
    });
  });


  //Creates user custom Burger 
  $("#createOrder").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bu").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
