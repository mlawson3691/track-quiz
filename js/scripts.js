$(function() {

  var questionCounter = 1;

  $("#submit").click(function(event) {
    $('#question' + questionCounter).hide();
    if (questionCounter < 5) {
      questionCounter += 1;
      $('#question' + questionCounter).fadeIn();
    } else {
      $("#submit").hide();
      $("#result").show();
    }

    event.preventDefault();
  });

});
