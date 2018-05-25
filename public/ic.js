// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eaten").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("newflavor");
  
      var newEatenState = {
        sleepy: newEat
      };
  
      // Send the PUT request.
      $.ajax("/api/icecream/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed eaten to", newEat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newEat = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=eaten]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/icecream", {
        type: "POST",
        data: newEat
      }).then(
        function() {
          console.log("created new flavor");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  