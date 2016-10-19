// This code runs when the page loads
$(function() {

  $(".btn").on("click", function(event) {
    event.preventDefault()
    //creating a variable
    //in jQuery, $(this) refers to event that we subscribed to
    //we actually want to remove div that contains the a - not just the element
    //traversing in jQuery allows you to move up and down in the tree
    var elementThatWasClicked = $(this)
    //setting element and logging to console
    console.log(elementThatWasClicked)
    //remove <a> element that we clicked
    //now removing the full div
    elementThatWasClicked.parents(".row").remove()
    // remove the element
  })

})
